backend:
  name: github
  repo: tyln141/azt-medikal-website # Bu satırın doğru olduğundan emin ol
  branch: main

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "anasayfa"
    label: "Ana Sayfa Ayarları"
    files:
      - label: "Ana Sayfa İçerikleri"
        name: "anasayfa"
        file: "content/anasayfa.md"
        fields:
          - {label: "Giriş Ana Başlık", name: "hero_baslik", widget: "string"}
          - {label: "Giriş Alt Başlık", name: "hero_alt_baslik", widget: "string"}
          - {label: "Hakkımızda Metni", name: "hakkimizda_metin", widget: "markdown"}
          - {label: "İstatistik 1", name: "stat1", widget: "string"}
          - {label: "İstatistik 2", name: "stat2", widget: "string"}
          - {label: "İstatistik 3", name: "stat3", widget: "string"}
          - {label: "Neden Biz Başlık", name: "nedenbiz_baslik", widget: "string"}
          - label: "Neden Biz Kartları"
            name: "nedenbiz_kartlari"
            widget: "list"
            fields:
              - {label: "İkon (Remix Icon Adı)", name: "ikon", widget: "string"}
              - {label: "Başlık", name: "baslik", widget: "string"}
              - {label: "Açıklama", name: "aciklama", widget: "text"}

  - name: "urunler"
    label: "Ürünler ve Detay Sayfaları"
    folder: "content/urunler"
    create: true
    fields:
      - {label: "Ana Kategori Adı", name: "title", widget: "string"}
      - {label: "Ana Kategori Açıklaması", name: "description", widget: "text"}
      - {label: "Ana Sayfa Kart Görseli", name: "image", widget: "image"}
      - label: "Alt Ürünler Listesi"
        name: "sub_products"
        widget: "list"
        fields:
          - {label: "Alt Ürün Adı", name: "name", widget: "string"}
          - {label: "Görsel", name: "image", widget: "image"}
          - {label: "Özellikler (Her satıra bir tane)", name: "features", widget: "list"}
      - label: "Yan Menü (Sidebar)"
        name: "sidebar"
        widget: "list"
        fields:
          - {label: "Yan Menü Başlığı", name: "title", widget: "string"}
          - {label: "Liste Elemanları (Her satıra bir tane)", name: "items", widget: "list"}