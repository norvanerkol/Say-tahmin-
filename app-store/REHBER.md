# All Green'i App Store'a yükleme rehberi

Bu repoda iOS uygulaması için gereken her şey hazır: Xcode projesi (`ios/`), ikon, açılış ekranı, mağaza metinleri (`app-store/listing.md`), ekran görüntüleri (`app-store/screenshots/`), gizlilik politikası ve destek sayfası.

Senin yapman gerekenler, Apple'ın kendi hesabın ve Mac ile yapılmasını zorunlu tuttuğu adımlar.

## Gerekenler

1. **Mac bilgisayar** ve App Store'dan ücretsiz **Xcode** (en güncel sürüm)
2. **Apple Developer Program** üyeliği: yıllık 99 USD, https://developer.apple.com/programs/enroll/ adresinden. Onay birkaç saat ile iki gün sürebilir.
3. **Node.js** (LTS sürümü): https://nodejs.org

## 1. Projeyi Mac'e indir

Terminal'de:

```bash
git clone https://github.com/norvanerkol/Say-tahmin-.git
cd Say-tahmin-
npm install
npm run ios
```

Son komut web dosyalarını iOS projesine kopyalar ve Xcode'u açar.

## 2. Xcode'da imzalama

1. Soldaki listeden en üstteki **App** projesine tıkla, **TARGETS → App** seç.
2. **Signing & Capabilities** sekmesinde **Automatically manage signing** işaretli olsun.
3. **Team** kısmından Apple Developer hesabını seç (önce Xcode → Settings → Accounts'tan Apple ID'nle giriş yap).
4. **Bundle Identifier** `com.norvanerkol.allgreen` olmalı. Apple "bu ID alınmış" derse sonuna bir şey ekle (örneğin `com.norvanerkol.allgreen.game`) ve App Store Connect'te de aynısını kullan.

## 3. Dene

Üstteki cihaz seçiciden bir iPhone simülatörü seç ve ▶︎ (Run) tuşuna bas. Ya da iPhone'unu kabloyla bağlayıp onu seç. İki modu da birer kere oyna.

## 4. App Store Connect'te uygulamayı oluştur

1. https://appstoreconnect.apple.com → **Apps** → **+** → **New App**
2. Platform: **iOS**, Ad: **All Green**, Birincil dil: **Türkçe**, Bundle ID: Xcode'dakiyle aynısı, SKU: `allgreen-ios`
3. "All Green" adı alınmışsa `All Green: Sayı Düellosu` ya da `All Green - Number Duel` kullan.

## 5. Mağaza sayfasını doldur

`app-store/listing.md` dosyasındaki metinleri kopyala:

- **Türkçe** sayfaya Türkçe metinleri ve `app-store/screenshots/tr/` görsellerini yükle.
- Sağ üstteki dil menüsünden **English (U.S.)** ekle, İngilizce metinleri ve `app-store/screenshots/en/` görsellerini yükle.
- Ekran görüntüleri **iPhone 6.9" Display** alanına gider.
- **App Privacy** bölümünde "Data Not Collected" seç.
- **Age Rating** anketinde her şeye "None" de, sonuç 4+ çıkar.
- **Pricing and Availability**: Ücretsiz (Free), istediğin ülkeler.

## 6. Uygulamayı yükle

1. Xcode'da üstteki cihaz seçiciden **Any iOS Device (arm64)** seç.
2. **Product → Archive**. Bitince Organizer penceresi açılır.
3. **Distribute App → App Store Connect → Upload**, varsayılan seçeneklerle ilerle.
4. 10-30 dakika sonra build App Store Connect'te **TestFlight** sekmesinde görünür.

## 7. İncelemeye gönder

1. App Store Connect'te sürüm sayfasında **Build** bölümünden yüklediğin build'i seç.
2. **App Review Information → Notes** kısmına `listing.md`'deki inceleme notunu yapıştır.
3. **Add for Review → Submit**. İnceleme genelde 1-2 gün sürer.

## Oyunu güncellemek

Oyunda bir değişiklik yaptıktan sonra:

```bash
npm run ios
```

Xcode'da **TARGETS → App → General** altından **Version**'ı artır (1.0 → 1.1) ve 6. adımı tekrarla.

## Dosyalar nerede?

| Ne | Nerede |
|---|---|
| Oyun | `index.html` |
| Gizlilik / destek sayfaları | `privacy.html`, `support.html` |
| iOS Xcode projesi | `ios/App/App.xcodeproj` |
| Uygulama ikonu (1024px) | `icons/icon-1024.png`, Xcode'da `ios/App/App/Assets.xcassets/AppIcon.appiconset` |
| Açılış ekranı | `ios/App/App/Assets.xcassets/Splash.imageset` |
| Mağaza metinleri | `app-store/listing.md` |
| Ekran görüntüleri | `app-store/screenshots/tr`, `app-store/screenshots/en` |
