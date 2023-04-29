import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const tr: LocaleType = {
  WIP: "Çalışma devam ediyor...",
  Error: {
    Unauthorized:
      "Yetkisiz erişim, lütfen erişim kodunu ayarlar sayfasından giriniz.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mesaj`,
  },
  Chat: {
    SubTitle: (count: number) => `Sekobi tarafından ${count} mesaj`,
    Actions: {
      ChatList: "Sohbet Listesine Git",
      CompressedHistory: "Sıkıştırılmış Geçmiş Bellek Komutu",
      Export: "Tüm Mesajları Markdown Olarak Dışa Aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Tekrar Dene",
      Delete: "Delete",
    },
    Rename: "Sohbeti Yeniden Adlandır",
    Typing: "Yazıyor…",
    Input: (submitKey: string) => {
      var inputHints = `Göndermek için ${submitKey}`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", kaydırmak için Shift + Enter";
      }
      return inputHints + ", komutları aramak için / (eğik çizgi)";
    },
    Send: "Gönder",
    Config: {
      Reset: "Varsayılan Ayarlara Dön",
      SaveAs: "Ayarları Kaydet",
    },
  },
  Export: {
    Title: "Tüm Mesajlar",
    Copy: "Tümünü Kopyala",
    Download: "İndir",
    MessageFromYou: "Sizin Mesajınız",
    MessageFromChatGPT: "Sekobinin'nin Mesajı",
  },
  Memory: {
    Title: "Bellek Komutları",
    EmptyContent: "Henüz değil.",
    Send: "Belleği Gönder",
    Copy: "Belleği Kopyala",
    Reset: "Oturumu Sıfırla",
    ResetConfirm:
      "Sıfırlama, geçerli görüşme geçmişini ve geçmiş belleği siler. Sıfırlamak istediğinizden emin misiniz?",
  },
  Home: {
    NewChat: "Yeni Sohbet",
    DeleteChat: "Seçili sohbeti silmeyi onaylıyor musunuz?",
    DeleteToast: "Sohbet Silindi",
    Revert: "Geri Al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "Tüm Ayarlar",
    Actions: {
      ClearAll: "Tüm Verileri Temizle",
      ResetAll: "Tüm Ayarları Sıfırla",
      Close: "Kapat",
      ConfirmResetAll: "Tüm ayarları sıfırlamak istediğinizden emin misiniz?",
      ConfirmClearAll: "Tüm sohbeti sıfırlamak istediğinizden emin misiniz?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Tüm Diller",
      Options: {
        tr: "Türkçe",
        en: "English",
        de: "Deutsch",
      },
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Yazı Boyutu",
      SubTitle: "Sohbet içeriğinin yazı boyutunu ayarlayın",
    },
    Update: {
      Version: (x: string) => `Sürüm: ${x}`,
      IsLatest: "En son sürüm",
      CheckUpdate: "Güncellemeyi Kontrol Et",
      IsChecking: "Güncelleme kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sürüm bulundu: ${x}`,
      GoToUpdate: "Güncelle",
    },
    SendKey: "Gönder Tuşu",
    Theme: "Tema",
    TightBorder: "Tam Ekran",
    SendPreviewBubble: {
      Title: "Mesaj Önizleme Balonu",
      SubTitle: "İşaretlemeyi balonda önizleyin",
    },
    Mask: {
      Title: "Yapay Zeka Açılış Ekranı",
      SubTitle: "Yeni sohbete başlamadan önce bir yapay zeka açılış ekranı göster",
    },
    Prompt: {
      Disable: {
        Title: "Otomatik tamamlamayı devre dışı bırak",
        SubTitle: "Otomatik tamamlamayı kullanmak için / (eğik çizgi) girin",
      },
      List: "Komut Listesi",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} yerleşik, ${custom} kullanıcı tanımlı`,
      Edit: "Düzenle",
      Modal: {
        Title: "Prompt Listesi",
        Add: "Yeni Ekle",
        Search: "Prompts Ara",
      },
    },
    HistoryCount: {
      Title: "Ekli Mesaj Sayısı",
      SubTitle: "İstek başına ekli gönderilen mesaj sayısı",
    },
    CompressThreshold: {
      Title: "Geçmiş Sıkıştırma Eşiği",
      SubTitle:
        "Sıkıştırılmamış mesajların uzunluğu bu değeri aşarsa sıkıştırılır",
    },
    Token: {
      Title: "API Anahtarı",
      SubTitle: "Erişim kodu sınırını yoksaymak için anahtarınızı kullanın",
      Placeholder: "API Anahtarı",
    },
    Usage: {
      Title: "Hesap Bakiyesi",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanılan $${used}, abonelik $${total}`;
      },
      IsChecking: "Kontrol ediliyor...",
      Check: "Tekrar Kontrol Et",
      NoAccess: "Bakiyeyi kontrol etmek için API anahtarını girin",
    },
    AccessCode: {
      Title: "Erişim Kodu",
      SubTitle: "Erişim kontrolü etkinleştirme",
      Placeholder: "Erişim Kodu Gerekiyor",
    },
    Model: "Model",
    Temperature: {
      Title: "Gerçeklik",
      SubTitle:
        "Daha büyük bir değer girildiğinde gerçeklik oranı düşer ve daha rastgele çıktılar üretir",
    },
    MaxTokens: {
      Title: "Maksimum Belirteç",
      SubTitle:
        "Girdi belirteçlerinin ve oluşturulan belirteçlerin maksimum uzunluğu",
    },
    PresencePenlty: {
      Title: "Varlık Cezası",
      SubTitle:
        "Daha büyük bir değer, yeni konular hakkında konuşma olasılığını artırır",
    },
  },
  Store: {
    DefaultTopic: "Yeni Konuşma",
    BotHello: "Merhaba! Ben Sekobi, Size bugün nasıl yardımcı olabilirim?",
    Error: "Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz.",
    Prompt: {
      History: (content: string) =>
        "Bu, yapay zeka ile kullanıcı arasındaki sohbet geçmişinin bir özetidir: " +
        content,
      Topic:
        "Lütfen herhangi bir giriş, noktalama işareti, tırnak işareti, nokta, sembol veya ek metin olmadan konuşmamızı özetleyen dört ila beş kelimelik bir başlık oluşturun. Çevreleyen tırnak işaretlerini kaldırın.",
      Summarize:
        "Gelecekteki bağlam için bir bilgi istemi olarak kullanmak üzere tartışmamızı en fazla 200 kelimeyle özetleyin.",
    },
  },
  Copy: {
    Success: "Panoya kopyalandı",
    Failed: "Kopyalama başarısız oldu, lütfen panoya erişim izni verin",
  },
  Context: {
    Toast: (x: any) => `${x} bağlamsal bellek komutu`,
    Edit: "Bağlamsal ve Bellek Komutları",
    Add: "Yeni Ekle",
  },
  Plugin: {
    Name: "Eklentiler",
  },
  Mask: {
    Name: "Zeka Seç",
    Page: {
      Title: "Yapay Zeka Temaları",
      SubTitle: (count: number) => `${count} yapay zeka teması.`,
      Search: "Yapay Zeka Ara",
      Create: "Oluştur",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Sohbet",
      View: ":Görüntüle",
      Edit: "Düzenle",
      Delete: "Sil",
      DeleteConfirm: "Silmek İstiyor musunuz?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Prompt Tema Düzenleme ${readonly ? "(readonly)" : ""}`,
      Download: "İndir",
      Clone: "Kopyala",
    },
    Config: {
      Avatar: "Bot İkon",
      Name: "Bot İsmi",
    },
  },
  NewChat: {
    Return: "Geri Dön",
    Skip: "Geç",
    Title: "Bir Yapay Zeka Seç",
    SubTitle: "Seçtiğiniz Yapay Zekanın Arkasındaki Ruh ile Sohbet Edin",
    More: "Daha Fazla Bul",
    NotShow: "Tekrar Gösterme",
    ConfirmNoShow: "Devre dışı bırakmayı onaylıyor musunuz？Daha sonra ayarlardan etkinleştirebilirsiniz.",
  },
};

export default tr;
