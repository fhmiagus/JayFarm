import productUtuh1 from '../assets/product-utuh-1.png';
import productUtuh2 from '../assets/product-utuh-2.png';
import productBebekHidup from '../assets/gallery1.png';
import productParting1 from '../assets/product-parting-1.png';
import productParting2 from '../assets/product-parting-2.png';

export const products = [
  {
    id: 'whole',
    imgs: [productUtuh1, productUtuh2],
    tag: 'Terlaris',
    tagVariant: 'default',
    featured: false,
    title: 'Bebek Utuh Segar',
    description: 'Bebek utuh segar siap masak, dibersihkan secara higienis dan dikemas dengan baik untuk menjaga kesegaran.',
    specs: ['⚖️ Berat 0.7 – 2.5 kg/ekor', '🌡️ Disimpan dalam cold storage', '📦 Min. order 10 ekor'],
  },
  {
    id: 'parting',
    imgs: [productParting1, productParting2],
    tag: 'Premium',
    tagVariant: 'premium',
    featured: true,
    title: 'Bebek Potong / Parting',
    description: 'Bebek yang telah dipotong per bagian (dada, paha, sayap) sesuai kebutuhan, ideal untuk restoran dan katering.',
    specs: ['⚖️ Tersedia per kg atau per paket', '🍽️ Cocok untuk restoran & katering', '📦 Min. order 5 kg'],
  },
  {
    id: 'live',
    img: productBebekHidup,
    tag: 'Populer',
    tagVariant: 'default',
    featured: false,
    title: 'Bebek Hidup',
    description: 'Bebek hidup siap jual untuk peternak lain, pemotong, atau konsumen yang menginginkan bebek langsung dari kandang.',
    specs: ['⚖️ Berat 1.8 – 2.2 kg/ekor', '💪 Bebek sehat & aktif', '📦 Min. order 20 ekor'],
  },
];
