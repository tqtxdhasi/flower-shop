import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "baks.bezsmertnuy@gmail.com",
    subject: "Nowe zamówienie od klienta",
    text: `
    📦 Nowe zamówienie od klienta:
    
    📞 Numer telefonu: ${data.phoneNumber}
    💰 Budżet: ${data.budget} zł
    🌹 Ilość róż: ${data.quantity}
    📏 Długość łodyg: ${data.height} cm
    🎁 Opakowanie: ${data.packaging || "Brak / Wstążka"}
    🎨 Kolor róż: ${data.flowerColor}
    
    📝 List: ${data.letterOption ? "Tak" : "Nie"}
    🖼️ Zdjęcie: ${data.imageOption ? "Tak" : "Nie"}
    🚚 Dostawa: ${data.delivery ? "Tak" : "Nie"}
    
    💵 Cena podstawowa: ${data.totalPrice} zł
    📦 Koszt opakowania: ${data.packagingCost} zł
    🧾 Suma końcowa: ${data.finalPrice} zł
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
