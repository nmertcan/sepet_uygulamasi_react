# Teknolojik Market — React Sepet Uygulaması

React ve Vite ile hazırlanmış, ürünleri sepete eklemeyi ve sepetten çıkarmayı gösteren örnek alışveriş arayüzü.

## Özellikler

- Ürün listesinden sepete ürün ekleme
- Sepetteki ürünleri görüntüleme
- Seçilen ürünü sepetten çıkarma
- React `useState` ile sepet durumunu yönetme
- Ürün listesi ve sepet özeti için ayrı bileşenler

## Teknolojiler

React, JavaScript, Vite ve CSS.

## Kurulum

```bash
npm install
npm run dev
```

## Kontroller

```bash
npm run lint
npm run build
```

## Proje yapısı

- `src/App.jsx`: Sepet durumu ve ekleme/çıkarma işlemleri
- `src/components/ProductList`: Ürün listesi
- `src/components/CartSummary`: Sepet özeti

## Geliştirme fikirleri

Ürün adedi yönetimi, kalıcı sepet, otomatik testler ve mobil görünümün iyileştirilmesi.

> Bu proje eğitim/portföy amaçlıdır. Ödeme altyapısı içerdiği iddia edilmemektedir.
