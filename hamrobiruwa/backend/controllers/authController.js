// src/controllers/authController.js

exports.send2FACode = async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

  await sendEmail(email, `Your 2FA code is ${code}`);

  // Store code in the database with an expiration time
  await TwoFactorAuth.create({ email, code, expiresAt: Date.now() + 10 * 60 * 1000 });

  res.status(200).send('2FA code sent');
};

// Validate 2FA code
exports.verify2FACode = async (req, res) => {
  const { email, code } = req.body;
  const validCode = await TwoFactorAuth.findOne({ email, code, expiresAt: { $gt: Date.now() } });

  if (!validCode) {
    return res.status(400).send('Invalid or expired 2FA code');
  }

  // Proceed with login
  res.status(200).send('2FA code verified');
};
