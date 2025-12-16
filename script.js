/* --- TẠO HIỆU ỨNG TUYẾT RƠI NÂNG CẤP --- */
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    
    // --- KHU VỰC CHỈNH SỬA (Bạn thay đổi thông số ở đây) ---
    
    // 1. Hình dáng bông tuyết (Bạn có thể thêm hình trái tim '❤' nếu thích)
    const snowTypes = ['❄', '❅', '❆', '★', '•', '✨']; 
    
    // 2. Kích thước (pixel)
    const minSize = 10;
    const maxSize = 30;
    
    // 3. Thời gian rơi (giây) - Số càng lớn rơi càng chậm
    const minDuration = 5;
    const maxDuration = 12;
    
    // -------------------------------------------------------

    // Random chọn ký tự bông tuyết
    snowflake.innerHTML = snowTypes[Math.floor(Math.random() * snowTypes.length)];
    
    snowflake.classList.add('snowflake');
    
    // Random vị trí xuất hiện (trải đều chiều ngang màn hình)
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Random kích thước
    const size = Math.random() * (maxSize - minSize) + minSize;
    snowflake.style.fontSize = size + 'px';
    
    // Random tốc độ rơi
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    snowflake.style.animationDuration = duration + 's';
    
    // Random delay (để tuyết không rơi cùng lúc 1 cục)
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    
    // Random độ mờ (tạo chiều sâu xa gần)
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    
    // Random độ đu đưa (gió thổi)
    const swayAmount = Math.random() * 50 + 20; // Tăng lên để đung đưa nhiều hơn
    snowflake.style.setProperty('--sway', `${swayAmount}px`);

    snowContainer.appendChild(snowflake);

    // Xóa tuyết sau khi rơi xong để nhẹ máy
    setTimeout(() => {
        if (snowflake && snowflake.parentNode) {
            snowflake.remove();
        }
    }, (duration + 5) * 1000);
}

// --- CẤU HÌNH MẬT ĐỘ TUYẾT ---
// Số càng NHỎ thì tuyết rơi càng DÀY (Ví dụ: 50 là bão tuyết, 300 là rơi thưa)
setInterval(createSnow, 100);

// Gọi hàm tạo tuyết liên tục
setInterval(createSnow, 150);

/* --- XỬ LÝ CLICK VÀ GÕ CHỮ NÂNG CẤP --- */

// Nội dung thư
const fullMessage = "Gửi em! Giáng Sinh này lạnh lắm, nhưng trái tim anh luôn ấm áp vì có em bên cạnh. Chúc tình yêu của anh một mùa Noel hạnh phúc và ngập tràn yêu thương. Yêu em thật nhiều!";
const speed = 40; // Tốc độ gõ chữ (ms)
let i = 0;
let isTyping = false;

function typeWriter() {
    if (i < fullMessage.length) {
        const messageText = document.getElementById("message-text");
        messageText.innerHTML = fullMessage.substring(0, i + 1) + '<span class="typing-cursor"></span>';
        i++;
        
        // Hiệu ứng âm thanh gõ chữ
        playTypingSound();
        
        setTimeout(typeWriter, speed);
    } else {
        isTyping = false;
        // Hiển thị chữ ký sau khi gõ xong
        setTimeout(() => {
            const signature = document.querySelector('.signature');
            signature.style.opacity = '1';
        }, 500);
    }
}

function playTypingSound() {
    try {
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ'; // Âm thanh giả
        audio.volume = 0.1;
        audio.play();
    } catch(e) {}
}

function createSparkles() {
    const card = document.getElementById('card');
    for (let j = 0; j < 15; j++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        
        card.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

/* --- HÀM MỞ QUÀ (Đã xóa phần chữ hiển thị) --- */
function openGift() {
    const giftBox = document.getElementById('gift-box');
    const card = document.getElementById('card');
    const audio = document.getElementById('bg-music');
    
    // Lưu ý: Mình đã xóa dòng tìm 'click-text' để không bị lỗi nữa

    // 1. Thêm hiệu ứng pháo hoa
    createSparkles();
    
    // 2. Hiệu ứng hộp quà mở
    giftBox.classList.remove('shake');
    giftBox.style.animation = 'giftOpen 1s ease forwards';
    
    // 3. Hiện tấm thiệp sau 1 giây
    setTimeout(() => {
        giftBox.style.display = 'none';
        card.style.display = 'block';
        
        // 4. Chạy hiệu ứng gõ chữ sau 0.5s
        setTimeout(() => {
            if (!isTyping) {
                isTyping = true;
                typeWriter();
            }
        }, 500);
        
    }, 1000);
    
    // Thêm CSS animation cho hộp quà mở
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes giftOpen {
            0% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.1) translateY(-20px); }
            100% { 
                transform: scale(0) translateY(-50px); 
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Thêm sao trang trí cho hộp quà
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.querySelector('.gift-box');
    
    // Thêm dây ruy băng ngang
    const ribbonHorizontal = document.createElement('div');
    ribbonHorizontal.classList.add('ribbon-horizontal');
    giftBox.appendChild(ribbonHorizontal);
    
    // Thêm các ngôi sao trang trí
    for (let i = 0; i < 4; i++) {
        const star = document.createElement('div');
        star.classList.add('star-decoration');
        star.innerHTML = '★';
        star.style.animationDelay = `${i * 0.5}s`;
        
        // Đặt vị trí các ngôi sao
        switch(i) {
            case 0: star.style.top = '20px'; star.style.left = '20px'; break;
            case 1: star.style.top = '20px'; star.style.right = '20px'; break;
            case 2: star.style.bottom = '20px'; star.style.left = '20px'; break;
            case 3: star.style.bottom = '20px'; star.style.right = '20px'; break;
        }
        
        giftBox.appendChild(star);
    }
});
/* --- TỰ ĐỘNG PHÁT NHẠC THÔNG MINH --- */
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bg-music');
    
    if (audio) {
        audio.volume = 0.5; // Đặt âm lượng vừa phải (50%)
        
        // Cố gắng phát nhạc ngay khi web tải xong
        var promise = audio.play();

        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay thành công (thường là trên Firefox hoặc nếu người dùng đã từng vào web)
                console.log("Nhạc đã tự động phát.");
            }).catch(error => {
                // Autoplay bị chặn (Chrome/Edge/Safari) -> Chờ cú click đầu tiên
                console.log("Trình duyệt chặn autoplay. Đang chờ tương tác...");
                
                // Tạo một sự kiện click toàn màn hình để kích hoạt nhạc
                function playOnInteraction() {
                    audio.play();
                    // Sau khi phát được rồi thì gỡ sự kiện này đi để không bị lặp
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                }

                // Lắng nghe click chuột hoặc chạm tay vào bất kỳ đâu
                document.addEventListener('click', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
            });
        }
    }
});