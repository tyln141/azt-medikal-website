// netlify/functions/update-products.js

const fs = require('fs').promises;
const path = require('path');

exports.handler = async (event, context) => {
  // Sadece POST isteklerini kabul et
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Gelen veriyi al ve JSON formatına çevir
    const data = JSON.parse(event.body);

    // Güvenlik anahtarını kontrol et (Basit bir güvenlik önlemi)
    if (data.secret !== 'LEVERTEKNODIZAYN_COK_GIZLI_SIFRE') {
      return { statusCode: 401, body: 'Unauthorized' };
    }

    // Güncellenecek dosyanın yolunu belirle
    const filePath = path.join(process.cwd(), 'urunler.json');

    // Yeni ürün verisini dosyaya yaz
    await fs.writeFile(filePath, JSON.stringify(data.products, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Ürünler başarıyla güncellendi!' }),
    };

  } catch (error) {
    console.error('Hata:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Bir hata oluştu: ' + error.message }),
    };
  }
};