<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de Compte</title>
  <style>
    /* Reset */
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      font-family: Arial, sans-serif;
      background-color: #F0F6FF; /* primary-50 */
    }

    /* Container */
    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(51, 102, 255, 0.15); /* primary-500 with opacity */
      overflow: hidden;
    }

    /* Header */
    .header {
      background-color: #3366FF; /* primary-500 */
      padding: 30px;
      text-align: center;
      color: #ffffff;
      position: relative;
    }
    .header h1 {
      font-size: 26px;
      font-weight: bold;
      margin: 0;
    }
    .header-icon {
      font-size: 50px;
      margin-bottom: 10px;
      color: #ffffff;
    }

    /* Email Content */
    .email-content {
      padding: 40px 25px;
      color: #0A1433; /* primary-900 */
    }
    .email-content h2 {
      font-size: 24px;
      color: #2952CC; /* primary-600 */
      margin-bottom: 15px;
      text-align: center;
    }
    .email-content p {
      font-size: 16px;
      line-height: 1.8;
      color: #000; /* primary-800 */
      margin: 10px 0;
      text-align: center;
    }
    .email-content a {
      color: #3366FF; /* primary-500 */
      text-decoration: none;
    }

    /* Divider */
    .divider {
      height: 1px;
      background-color: #8DB6FF; /* primary-300 */
      opacity: 0.5;
      margin: 30px 0;
    }

    /* Confirmation Button */
    .button-container {
      text-align: center;
      margin: 40px 0;
    }
    .button-container a {
      background: linear-gradient(135deg, #3366FF, #5B8DEF); /* primary-500 to primary-400 */
      color: #ffffff;
      padding: 14px 30px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      display: inline-block;
      box-shadow: 0 4px 10px rgba(51, 102, 255, 0.3); /* primary-500 with opacity */
    }
    .button-container a:hover {
      background: linear-gradient(135deg, #2952CC, #3366FF); /* primary-600 to primary-500 */
      box-shadow: 0 6px 12px rgba(51, 102, 255, 0.4); /* primary-500 with opacity */
    }

    /* Footer */
    .footer {
      background-color: #F0F6FF; /* primary-50 */
      padding: 25px;
      text-align: center;
      font-size: 14px;
      color: #000; /* primary-700 */
    }
    .footer p {
      margin: 5px 0;
      line-height: 1.6;
    }
    .footer a {
      color: #3366FF; /* primary-500 */
      text-decoration: none;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .email-content {
        padding: 30px 15px;
      }
      .header h1 {
        font-size: 22px;
      }
      .button-container a {
        font-size: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="header-icon">🔒</div>
      <h1>Activez Votre Compte !</h1>
    </div>

    <!-- Email Content -->
    <div class="email-content">
      <h2>Confirmez votre inscription</h2>
      <p>Bonjour,</p>
      <p>Nous sommes ravis de vous accueillir ! Cliquez ci-dessous pour confirmer votre email et finaliser votre inscription.</p>
      
      <!-- Divider -->
      <div class="divider"></div>

      <!-- Confirmation Button -->
      <div class="button-container">
        <a href="http://localhost:8000/api/verify-email/{{$user->verification_token }}" target="_blank">Confirmer mon compte</a>
      </div>

      <p>Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :</p>
      <p><a href="http://localhost:3000/api/verify-email/{{$user->verification_token }}">http://localhost:3000/verify-email/{{$user->verification_token }}</a></p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Si vous avez des questions, contactez-nous à <a href="mailto:contact@happijob.com">contact@happijob.com</a></p>
      <p>&copy; 2024 JobExpress. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>