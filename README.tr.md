<p align="center"><img src="assets/navrynt-logo.png" alt="NAVRYNT logosu" width="76"></p>
<h1 align="center">NAVRYNT · Etkileşimli Demo</h1>
<p align="center"><strong>Kanıtın kaynağını incele. İlişkileri takip et. İş akışını keşfet.</strong></p>
<p align="center">Kurgusal bir vaka, seçilebilir ilişki grafiği, örnek hareket izleri ve gerçek yerel dosya hash hesabını bir araya getiren tarayıcı demosu.</p>
<p align="center"><a href="https://kaandevs-ops.github.io/navrynt-demo-public/">Canlı demoyu aç ↗</a> · <a href="README.md">English</a> · <a href="#hızlı-başlangıç">Hızlı başlangıç</a> · <a href="#özellikler">Özellikler</a> · <a href="#ekran-görüntüleri">Ekran görüntüleri</a> · <a href="docs/WORKFLOWS.md">Uygulamalı rehber</a></p>

![Güncel NAVRYNT demo ana ekranı](docs/media/overview.png)

> **Kapsam:** Bu repo statik bir demodur. Vaka, kişilerle ilişkili örnekler ve hareket izleri kurgusaldır. Yerel SHA-256 hesabı gerçekten çalışır. Biyometri sekmeleri ve Model Studio önizlemedir; model çıkarımı, canlı veri toplama veya eğitim çalıştırmaz. Canlı demoyu açabilir veya aşağıdaki komutlarla bilgisayarında çalıştırabilirsin. Full Product bölümündeki tarihsel gerçek ürün kayıtları önizlemelerden ayrıdır.

## Demoyu izle

[![Gerçek demo ekranları: vaka, grafik, örnek harita, hash ve model planı](docs/media/workflow.gif)](docs/media/demo-walkthrough.mp4)

**[▶ 20 saniyelik videoyu izle veya indir](docs/media/demo-walkthrough.mp4)**

GIF ve sessiz video bu repodaki demoyla yapılan gerçek tarayıcı etkileşimlerinin ekran görüntülerinden hazırlanmıştır. Video sekiz açıklamalı bölüm ve okunabilirlik için sabit tutulan kareler içerir. Kesintisiz ekran kaydı değildir. [Çekim yöntemi ve dosya hashleri](docs/MEDIA.md).

## Hızlı başlangıç

**Backend, API hesabı, model indirme, npm kurulumu veya derleme gerekmez.**

```bash
git clone https://github.com/kaandevs-ops/navrynt-demo-public.git
cd navrynt-demo-public
python3 -m http.server 4173 --bind 127.0.0.1
```

Tarayıcıda **[http://127.0.0.1:4173/](http://127.0.0.1:4173/)** adresini aç. Python 3 yalnızca statik dosyaları sunar. Hash hesabı için localhost veya HTTPS ve Web Crypto destekleyen güncel bir tarayıcı kullan.

Önerilen sıra: **Investigations → Harbor Signals → kanıt zaman çizelgesi → Entity Graph → GEOINT → Media Forensics**. Ana ekrandaki beş adımlı tur da bağlantılı senaryoyu gezdirir.

## Özellikler

| Bölüm | Deneyebileceğin işlem | Sınır |
|---|---|---|
| Rehberli inceleme | Beş adımda kurgusal vaka akışı | Gerçek kişi veya olay analizi değil |
| Investigations | Üç örnek vakayı filtrele, kaynakları aç, not ekle, JSON özetini indir | Notlar sayfa yenilenince sıfırlanır |
| Entity Graph | Altı düğümden birini seç, kaynak bağlamını oku, kanıt filtresini kullan | İlişkiler örnektir; kimlik tespiti değildir |
| GEOINT | Zaman kaydırıcısını hareket ettir, iki iz arasında geçiş yap | Üretilmiş gözlemler; canlı konum takibi yok |
| Media Forensics | En fazla 20 MiB dosyanın SHA-256 değerini hesapla | Gerçek yerel hesaplama; dosya yüklenmez |
| Biometric Lab | Altı biyometri türünün aşamalarını keşfet | Biyometrik veri toplanmaz ve model çalışmaz |
| Model Studio | Örnek çalıştırma planı oluştur ve indir | JSON içinde `executes: false` bulunur |
| Connectors | Örnek entegrasyon sözleşmelerini ve erişim gereksinimlerini oku | Kurulum, izin isteği veya sağlayıcı sorgusu yok |
| Project Scope | Veri, çalışma ve lisans sınırlarını incele | Tam ürün servisleri ayrı |

### Birbirine bağlı tek senaryo

`CASE-ALPHA-27 / Harbor Signals`; örnek teslimat belgesini, hareket gözlemini, depo illüstrasyonunu ve analist notunu birbirine bağlar. Bir kaydın kaynağını okuduktan sonra grafikteki ve haritadaki karşılığını inceleyebilirsin. Bir grafik bağlantısı gerçek bir kişi hakkında sonuç oluşturmaz.

### Altı biyometri önizlemesi

![Altı biyometri sekmesinin gerçek demo ekranları](docs/media/biometric-previews.gif)

**Face · Iris · Fingerprint · Voiceprint · Writer-ID · Gait** için ayrı sekmeler bulunur. Örnek skorlar ve araştırma açıklamaları yeni analiz sonucu veya genel doğruluk ölçümü değildir. Hiçbir biyometrik örnek girmen gerekmez.

## NAVRYNT tam uygulama hakkında

Tam uygulama; Python backend ve React arayüzüyle vaka/kanıt inceleme, ilişki grafikleri, konumsal görünümler, veri sağlayıcıları, altı biyometri servis yolu ve desteklenen model yaşam döngüsü işlemlerini bir araya getirir. Kurulum, modeller, veri ve sağlayıcı erişimleri ayrı yapılandırılır.

**[Tam ürün kayıtlarını aç](https://kaandevs-ops.github.io/navrynt-demo-public/#proof)** · [Kaynaklar ve çalışma sınırları](docs/FULL-PRODUCT.md) · [24 saniyelik ürün filmi](assets/proof/product-tour.mp4)

| Bu demo | Ayrı tam uygulama |
|---|---|
| Kurgusal vaka, SVG grafik ve örnek izler | Yapılandırılmış iş akışları ve veri adaptörleri |
| Altı biyometrik arayüz önizlemesi | Ayrı model servisleri ve protokole göre değerlendirme |
| Çalıştırılmayan örnek model planı | Gereken model, veri ve çalışma ortamıyla desteklenen işler |
| Backend olmadan tarayıcı etkileşimleri | Kendi ortamında kurulan backend, arayüz ve sağlayıcı erişimleri |

16 Ekim 2026 tarihli dört gerçek kayıt; uçuş konumları, deprem haritası, şirket ilişkisi ve araştırma ses karşılaştırmasını gösterir. Bunlar statik demonun çalıştırdığı sorgular değildir. Her kayıt belirli bir çalışmayı gösterir; bütün servislerin veya genel biyometrik doğruluğun kanıtı değildir.

| Gerçek konum sorgusu | Gerçek şirket ilişkisi sorgusu |
|---|---|
| [![Tam uygulamada uçuş konumları](assets/proof/aircraft.png)](assets/proof/aircraft.mp4) | [![Tam uygulamada şirket ilişkisi](assets/proof/companies.png)](assets/proof/companies.mp4) |

Kaynaklar: ADSB.lol/OpenStreetMap, USGS/OpenStreetMap, GLEIF ve LibriSpeech. Ayrıntılı atıflar ve sınırlamalar her kaydın yanında bulunur.

## Ekran görüntüleri

| Vaka ve kanıt bağlamı | Seçili grafik düğümü |
|---|---|
| ![Kurgusal kanıt zaman çizelgesi](docs/media/case-review.png) | ![Hareket izinin kaynak bağlamı](docs/media/graph.png) |

| Örnek hareket gözlemleri | Gerçek yerel SHA-256 hesabı |
|---|---|
| ![Harita ve zaman kaydırıcısı](docs/media/geoint.png) | ![61 baytlık örnek dosyanın hash sonucu](docs/media/local-hash.png) |

| Çalıştırılmayan model planı | Açık tema |
|---|---|
| ![executes false içeren plan](docs/media/model-plan.png) | ![Açık temada ana ekran](docs/media/overview-light.png) |

<details>
<summary><strong>Mobil görünüm</strong></summary>

<img src="docs/media/mobile.png" alt="390 piksel genişlikte NAVRYNT demo" width="300">

</details>

## Kontroller

- Yan menü veya **Command/Ctrl + K** ile bölümler arasında geçiş yap.
- Grafik düğümlerini **Tab + Enter/Space** ile seçebilirsin.
- **Escape** ayrıntı panellerini kapatır ve odağı açan düğmeye döndürür.
- Araç çubuğundaki tema düğmesi açık/koyu görünümü değiştirir. Tema tercihi yerelde saklanır.
- Dar ekranlarda menü düğmesini kullan. Azaltılmış hareket tercihi desteklenir.

## Veri ve çalışma sınırları

Dosya hash eşitliği dosyanın kaynağını veya gerçekliğini kanıtlamaz. Demo gerçek konum servisi, biyometrik kimlik tespiti ya da canlı OSINT toplama aracı olarak çalışmaz. Bu işlemler ayrı tam üründe uygun servisler, modeller, veri ve erişim yapılandırması gerektirir.

Bu repoda özel tam ürün, lisans oluşturma araçları, API anahtarları, model ağırlıkları, biyometrik veri kümeleri bulunmaz. Demo görüntüleri statik arayüzü gösterir; Full Product bölümündeki dört ayrı kayıt tarihsel tam ürün çalışmalarıdır.

## Teknoloji ve dosyalar

HTML, CSS, JavaScript, SVG ve hash hesabı için Web Crypto kullanılır. Çalışma zamanı paket bağımlılığı yoktur.

```text
index.html          Giriş, gezinme ve diyaloglar
app.js              Kurgusal senaryo ve tarayıcı işlemleri
scope-view.js       Veri ve çalışma sınırları
styles.css          Mobil görünüm ve temalar
assets/             Logo ve favicon
docs/WORKFLOWS.md   Uygulamalı rehber ve sorun giderme
docs/MEDIA.md       Görüntülerin yöntemi ve hashleri
docs/media/         Demo ekranları, GIF'ler ve video
scripts/            Yerel doğrulama yardımcıları
LICENSE             Apache License 2.0
```

## Kontrol ve geri bildirim

```bash
python3 scripts/validate.py
```

Kontrol; yerel dosya bağlantılarını, HTML kimliklerini, görsel alternatif metinlerini ve yayın sınırlarını inceler. Node.js varsa JavaScript sözdizimini de kontrol eder. Demoyu çalıştırmak için Node.js zorunlu değildir. Bu kontrol kapsamlı otomatik erişilebilirlik veya üretim testi değildir. Pages, `.nojekyll` ile `main` dalındaki statik dosyaları sunar; uygulama backend’i yayımlanmaz. Ayrı doğrulama iş akışı dosyaları ve medya hashlerini push/PR sırasında kontrol eder. [Yayın bilgileri](docs/DEPLOYMENT.md).

Bir hata bulursan [issue açabilirsin](https://github.com/kaandevs-ops/navrynt-demo-public/issues). Tarayıcıyı, ekran boyutunu, adımları ve beklenen sonucu belirt; kişisel bilgi veya erişim anahtarı paylaşma.

**Lisans:** [Apache License 2.0](LICENSE) · **Proje sahibi:** [kaandevs-ops](https://github.com/kaandevs-ops)
