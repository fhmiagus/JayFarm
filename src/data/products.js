import productBebekUtuh from '../assets/product-bebek-utuh.png';

export const products = [
  {
    id: 'whole',
    img: productBebekUtuh,
    tag: 'Terlaris',
    tagVariant: 'default',
    featured: false,
    title: 'Bebek Utuh Segar',
    description: 'Bebek utuh segar siap masak, dibersihkan secara higienis dan dikemas dengan baik untuk menjaga kesegaran.',
    specs: ['⚖️ Berat 1.5 – 2.5 kg/ekor', '🌡️ Disimpan dalam cold storage', '📦 Min. order 10 ekor'],
  },
  {
    id: 'parting',
    emoji: '🍖',
    tag: 'Premium',
    tagVariant: 'premium',
    featured: true,
    title: 'Bebek Potong / Parting',
    description: 'Bebek yang telah dipotong per bagian (dada, paha, sayap) sesuai kebutuhan, ideal untuk restoran dan katering.',
    specs: ['⚖️ Tersedia per kg atau per paket', '🍽️ Cocok untuk restoran & katering', '📦 Min. order 5 kg'],
  },
  {
    id: 'live',
    emoji: '🥚',
    tag: 'Populer',
    tagVariant: 'default',
    featured: false,
    title: 'Bebek Hidup',
    description: 'Bebek hidup siap jual untuk peternak lain, pemotong, atau konsumen yang menginginkan bebek langsung dari kandang.',
    specs: ['⚖️ Berat 1.8 – 2.2 kg/ekor', '💪 Bebek sehat & aktif', '📦 Min. order 20 ekor'],
  },
];
