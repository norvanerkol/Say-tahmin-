# Dial Duel

Gizli sayı düellosu. İki oyuncu 4 ya da 5 haneli gizli bir sayı seçer, sonra sırayla rakibin sayısını tahmin eder. Tahmindeki her rakam renklenir:

- 🟩 **Yeşil**: rakam doğru, yeri de doğru
- 🟨 **Sarı**: rakam sayıda var ama yeri yanlış
- 🟥 **Kırmızı**: rakam sayıda yok

Bütün kutuları ilk sen yeşile çevir, oyunu kazan.

*A secret number duel for two players or against the computer. Available in Turkish and English.*

## Oyna

- **Web:** https://norvanerkol.github.io/Say-tahmin-/ (telefonda "Ana Ekrana Ekle" ile uygulama gibi kullanılabilir, internetsiz de çalışır)
- **iOS:** App Store'a yükleme adımları için [app-store/REHBER.md](app-store/REHBER.md)

## Özellikler

- **İki kişi:** aynı telefonda sırayla
- **Bilgisayara karşı:** Kolay, Orta ve Zor seviyeler
- **Ayarlar:** 4 ya da 5 hane, tekrar eden rakam, eşit hak
- **Dil:** İngilizce ve Türkçe (ilk açılışta İngilizce, TR / EN düğmesiyle değiştirilebilir, seçim hatırlanır)
- Reklam, hesap ve veri toplama yok

## Proje yapısı

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Oyunun kendisi (tek dosya, kütüphane yok) |
| `privacy.html`, `support.html` | Gizlilik politikası ve destek sayfası (TR + EN) |
| `fonts/` | Baloo 2 ve Nunito fontları (internetsiz çalışma için) |
| `sw.js`, `manifest.webmanifest` | Web sürümünün çevrimdışı çalışması ve ana ekrana eklenmesi |
| `ios/` | Capacitor ile oluşturulmuş iOS Xcode projesi |
| `app-store/` | Mağaza metinleri, ekran görüntüleri ve yükleme rehberi |

## Geliştirme

```bash
npm install
npm run ios     # web dosyalarını iOS projesine kopyalar ve Xcode'u açar (Mac gerekir)
```

Web sürümü için kurulum gerekmez: `index.html` dosyasını tarayıcıda açman yeterli.
