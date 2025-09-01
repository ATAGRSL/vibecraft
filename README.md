# VibeCraft AI 🎨✨

AI destekli bir moodboard oluşturucu. Bir "vibe", bir duygu veya bir konsept tanımlayın ve VibeCraft AI, bir renk paleti, açıklayıcı bir anlatı ve çağrışımcı görsellerden oluşan benzersiz bir moodboard oluştursun.

Uygulama, kullanıcıların bir metin istemi girebildiği şık, koyu temalı bir arayüze sahiptir. Gönderildikten sonra, bir başlık, bir anlatı, interaktif bir renk paleti ve yüksek kaliteli görsellerden oluşan eksiksiz bir moodboard oluşturur ve görüntüler.

## ✨ Özellikler

- **Yapay Zeka Destekli Üretim**: Vibe'ınızı yorumlamak ve içerik oluşturmak için Google Gemini API'sinden yararlanır.
- **Eksiksiz Moodboard'lar**: Kısa bir hikaye, açıklayıcı isimlere sahip 5 renkli bir palet ve dört benzersiz görsel oluşturur.
- **İnteraktif Arayüz**: Renk paletindeki bir renge tıklayarak hex kodunu panonuza kopyalayın.
- **Duyarlı Tasarım**: Hem masaüstü hem de mobil cihazlarda harika görünür ve çalışır.
- **Etkileyici Deneyim**: Sizi bilgilendirmek için akıcı animasyonlar ve dinamik bir yükleme ekranı içerir.

## 🛠️ Kullanılan Teknolojiler

- **Frontend**: React, TypeScript, Tailwind CSS
- **AI Modeli**: Google Gemini (`gemini-2.5-flash` & `imagen-4.0-generate-001`)

## 🚀 Başlarken

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### Ön Koşullar

Modern bir web tarayıcısına ve dosyaları sunmanın bir yoluna ihtiyacınız var. Bu proje, bir derleme adımı olmadan doğrudan tarayıcıda çalışacak şekilde ayarlanmıştır, ancak çalışması için bir API anahtarı gerektirir.

### Kurulum

1.  **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/ATAGRSL/vibecraft-ai.git
    cd vibecraft-ai
    ```

2.  **API Anahtarınızı ayarlayın:**
    Uygulama, Google Gemini API anahtarını bir ortam değişkeninden (`process.env.API_KEY`) okuyacak şekilde yapılandırılmıştır. Tipik bir sadece tarayıcı kurulumunda bu değişken mevcut olmayacaktır.

    Yerel geliştirme için en basit yöntem, `services/geminiService.ts` dosyasını doğrudan düzenlemektir:

    Bu satırı bulun:
    ```javascript
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    ```
    Ve kendi anahtarınızla değiştirin:
    ```javascript
    const ai = new GoogleGenAI({ apiKey: "BURAYA_KENDI_GEMINI_API_ANAHTARINIZI_YAPISTIRIN" });
    ```

    > **⚠️ Uyarı:** **API anahtarınızı asla GitHub'a göndermeyin!** Bu yöntem yalnızca yerel testler içindir. Bu projeyi dağıtmayı planlıyorsanız, ortam değişkenlerini güvenli bir şekilde yönetmek için Vite veya Next.js gibi uygun bir derleme sistemi kullanın.

3.  **Uygulamayı çalıştırın:**
    Bir derleme adımı olmadığından, yalnızca `index.html` dosyasını sunmanız yeterlidir. Kod düzenleyiciniz için basit bir yerel sunucu uzantısı (VS Code için Live Server gibi) kullanabilir veya bir komut satırı sunucusu çalıştırabilirsiniz:
    ```bash
    # Python 3 varsa
    python -m http.server

    # Veya Node.js ve npx varsa
    npx serve
    ```
    Ardından, tarayıcınızı açın ve sağlanan yerel adrese gidin (örneğin, `http://localhost:8000` veya `http://localhost:3000`).

---

Bu proje, Gemini API ile yaratıcı bir yapay zeka uygulaması oluşturmanın bir gösterimi olarak oluşturulmuştur. Vibe'larınızı oluşturmanın tadını çıkarın!