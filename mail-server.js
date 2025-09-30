import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tonadresse@gmail.com", // ✅ remplace ici
      pass: "mot_de_passe_app", // ✅ utilise un mot de passe d'application
    },
  });

  const mailOptions = {
    from: email,
    to: "tonadresse@gmail.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message envoyé !" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erreur lors de l'envoi", error });
  }
});

app.listen(port, () => console.log("Serveur mail en écoute sur port " + port));
