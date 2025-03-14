// Bot tokeni va guruh ID
const BOT_TOKEN = "8078620532:AAGbRWEcnn9qXrP34HkeiGvGn1bsHao3brQ";
const CHAT_ID = "-1002560486402";

// Telegramga ma'lumot yuborish funksiyasi
async function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
    };

    try {
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        });
    } catch (error) {
        console.error("Xatolik:", error);
    }
}

// Modal oynalarni ochish
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Modal oynalarni yopish
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Sahifa yuklanganda barcha modal oynalarni yopish
document.addEventListener("DOMContentLoaded", function () {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
});

// ✅ Taksi chaqirish formasi
document.getElementById("taxiForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = this.name.value;
    const phone = this.phone.value;
    const destination = this.destination.value;
    const location = this.location.value;

    const message = `🚖 <b>Taksi buyurtmasi!</b>\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n📍 <b>Borish joyi:</b> ${destination}\n📌 <b>Manzil:</b> ${location}`;
    
    sendToTelegram(message);
    document.getElementById("taxiConfirm").style.display = "block";
    this.reset();
});

// ✅ Haydovchi bo‘lish formasi
document.getElementById("driverForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = this.driver_name.value;
    const phone = this.driver_phone.value;
    const car = this.car_info.value;
    const license = this.license.value;
    const experience = this.experience.value;
    const fuel = this.fuel.value;
    const extra = this.extra_info.value || "Yo‘q";

    const message = `🚗 <b>Haydovchi arizasi!</b>\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n🚘 <b>Avto:</b> ${car}\n📜 <b>Guvohnoma:</b> ${license}\n🛣️ <b>Tajriba:</b> ${experience} yil\n⛽ <b>Yoqilg‘i:</b> ${fuel}\n📝 <b>Qo‘shimcha:</b> ${extra}`;

    sendToTelegram(message);
    document.getElementById("driverConfirm").style.display = "block";
    this.reset();
});

// ✅ Baholash formasi
document.getElementById("ratingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const rating = this.rating.value;
    const message = `⭐ <b>Yangi baho!</b>\n\n🌟 <b>Baho:</b> ${rating} yulduz`;

    sendToTelegram(message);
    document.getElementById("ratingConfirm").style.display = "block";
    this.reset();
});
                                           
