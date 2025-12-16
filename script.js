/* --- TẠO HIỆU ỨNG TUYẾT RƠI NÂNG CẤP --- */
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    
    // --- KHU VỰC CHỈNH SỬA (Bạn thay đổi thông số ở đây) ---
    
    // 1. Hình dáng bông tuyết (Bạn có thể thêm hình trái tim '❤' nếu thích)
    const snowTypes = ['❄', '❅', '❆', '★', '•', '✨', '❤']; 
    
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

// Nội dung thư chia làm 2 phần
const part1Message = "Gửi em! Giáng Sinh này lạnh lắm, nhưng trái tim anh luôn ấm áp vì có em bên cạnh.";
const part2Message = "Chúc tình yêu của anh một mùa Noel hạnh phúc và ngập tràn yêu thương. Yêu em thật nhiều!";
const speed = 40; // Tốc độ gõ chữ (ms)

let part1Index = 0;
let part2Index = 0;
let isTypingPart1 = false;
let isTypingPart2 = false;

function typeWriterPart1() {
    if (part1Index < part1Message.length) {
        const messageText = document.getElementById("message-part1");
        messageText.innerHTML = part1Message.substring(0, part1Index + 1) + '<span class="typing-cursor"></span>';
        part1Index++;
        
        // Hiệu ứng âm thanh gõ chữ
        playTypingSound();
        
        setTimeout(typeWriterPart1, speed);
    } else {
        isTypingPart1 = false;
        
        // Hiện trái tim sau khi gõ xong phần 1
        setTimeout(() => {
            document.getElementById('heart-container').style.display = 'flex';
            
            // Bắt đầu gõ phần 2 sau khi hiện trái tim
            setTimeout(() => {
                isTypingPart2 = true;
                typeWriterPart2();
            }, 1000);
        }, 500);
    }
}

function typeWriterPart2() {
    if (part2Index < part2Message.length) {
        const messageText = document.getElementById("message-part2");
        messageText.innerHTML = part2Message.substring(0, part2Index + 1) + '<span class="typing-cursor"></span>';
        part2Index++;
        
        // Hiệu ứng âm thanh gõ chữ
        playTypingSound();
        
        setTimeout(typeWriterPart2, speed);
    } else {
        isTypingPart2 = false;
        
        // Hiện chữ ký sau khi gõ xong phần 2
        setTimeout(() => {
            document.getElementById('signature-text').style.opacity = '1';
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

/* --- HÀM MỞ QUÀ --- */
function openGift() {
    const giftBox = document.getElementById('gift-box');
    const card = document.getElementById('card');
    const audio = document.getElementById('bg-music');
    
    // 1. Thêm hiệu ứng pháo hoa
    createSparkles();
    
    // 2. Hiệu ứng hộp quà mở
    giftBox.classList.remove('shake');
    giftBox.style.animation = 'giftOpen 1s ease forwards';
    
    // 3. Hiện tấm thiệp sau 1 giây
    setTimeout(() => {
        giftBox.style.display = 'none';
        card.style.display = 'block';
        
        // 4. Chạy hiệu ứng gõ chữ phần 1 sau 0.5s
        setTimeout(() => {
            if (!isTypingPart1) {
                isTypingPart1 = true;
                typeWriterPart1();
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
                // Autoplay thành công
                console.log("Nhạc đã tự động phát.");
            }).catch(error => {
                // Autoplay bị chặn -> Chờ cú click đầu tiên
                console.log("Trình duyệt chặn autoplay. Đang chờ tương tác...");
                
                function playOnInteraction() {
                    audio.play();
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                }

                document.addEventListener('click', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
            });
        }
    }
});

/* --- THÊM HIỆU ỨNG KHI CLICK VÀO TRÁI TIM --- */
document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.getElementById('heart-container');
    
    heartContainer.addEventListener('click', function() {
        // Tạo hiệu ứng tim đập mạnh
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'heartBeat 2s infinite ease-in-out';
        }, 10);
        
        // Tạo thêm các tia sáng
        for (let i = 0; i < 8; i++) {
            const ray = document.createElement('div');
            ray.style.position = 'absolute';
            ray.style.width = '4px';
            ray.style.height = '40px';
            ray.style.background = 'linear-gradient(to top, rgba(255, 71, 87, 0.8), transparent)';
            ray.style.borderRadius = '2px';
            ray.style.top = '50%';
            ray.style.left = '50%';
            ray.style.transformOrigin = 'bottom center';
            ray.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
            ray.style.animation = `rayExpand 0.5s ease-out forwards`;
            
            heartContainer.appendChild(ray);
            
            setTimeout(() => {
                ray.remove();
            }, 500);
        }
    });
});

// Thêm CSS cho hiệu ứng tia sáng
const rayStyle = document.createElement('style');
rayStyle.innerHTML = `
    @keyframes rayExpand {
        0% { height: 0px; opacity: 1; }
        100% { height: 40px; opacity: 0; }
    }
`;
document.head.appendChild(rayStyle);
// Thêm vào cuối file script.js

/* --- HIỆU ỨNG KHI CLICK VÀO TRÁI TIM --- */
function heartClick(element) {
    // Hiệu ứng đập mạnh
    element.classList.add('heart-clicked');
    
    // Tạo các tia sáng
    createHeartRays(element);
    
    // Tạo hiệu ứng âm thanh (nếu có)
    playHeartSound();
    
    // Xóa class sau khi animation kết thúc
    setTimeout(() => {
        element.classList.remove('heart-clicked');
    }, 600);
}

function createHeartRays(heartElement) {
    // Tạo 8 tia sáng xung quanh
    for (let i = 0; i < 8; i++) {
        const ray = document.createElement('div');
        ray.classList.add('heart-ray');
        
        // Tính toán vị trí các tia
        const angle = (i * 45) * Math.PI / 180;
        ray.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        
        // Thêm vào container của trái tim
        heartElement.parentElement.appendChild(ray);
        
        // Xóa sau khi animation kết thúc
        setTimeout(() => {
            if (ray.parentNode) {
                ray.remove();
            }
        }, 800);
    }
}

function playHeartSound() {
    try {
        // Tạo âm thanh heartbeat đơn giản
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log("Không thể phát âm thanh");
    }
}

/* --- CẬP NHẬT HÀM GÕ CHỮ ĐỂ HIỆN TRÁI TIM --- */
// Sửa hàm typeWriterPart1 trong script.js
function typeWriterPart1() {
    if (part1Index < part1Message.length) {
        const messageText = document.getElementById("message-part1");
        messageText.innerHTML = part1Message.substring(0, part1Index + 1) + '<span class="typing-cursor"></span>';
        part1Index++;
        
        playTypingSound();
        
        setTimeout(typeWriterPart1, speed);
    } else {
        isTypingPart1 = false;
        
        // Hiện trái tim sau khi gõ xong phần 1
        setTimeout(() => {
            const heartContainer = document.getElementById('heart-container');
            heartContainer.style.display = 'flex';
            
            // Hiệu ứng trái tim xuất hiện
            heartContainer.style.opacity = '0';
            heartContainer.style.transform = 'scale(0.5)';
            
            setTimeout(() => {
                heartContainer.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                heartContainer.style.opacity = '1';
                heartContainer.style.transform = 'scale(1)';
            }, 100);
            
            // Bắt đầu gõ phần 2 sau 1.5 giây
            setTimeout(() => {
                isTypingPart2 = true;
                typeWriterPart2();
            }, 1500);
        }, 500);
    }
}

// Thêm hiệu ứng khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra và tạo hiệu ứng cho các ngôi sao xung quanh trái tim
    const stars = document.querySelectorAll('.heart-star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.2}s`;
    });
});
/* --- HÀM XỬ LÝ CĂN CHỈNH ẢNH TRONG TRÁI TIM --- */
function processHeartImage() {
    const img = document.getElementById('user-image');
    if (!img) return;

    // --- KHU VỰC CHỈNH THÔNG SỐ (Bạn chỉnh ở đây) ---
    
    // 1. Zoom: > 1 là phóng to, < 1 là thu nhỏ (Ví dụ: 0.8, 1.0, 1.2)
    const zoomLevel = 0.1; 
    
    // 2. Dịch chuyển ngang (X): Số dương dịch sang phải, số âm dịch sang trái
    // Với ảnh sách của bạn, ta cần dịch sang phải một chút để lấy phần sách
    const moveX = '20%'; 
    
    // 3. Dịch chuyển dọc (Y): Số dương dịch xuống, số âm dịch lên
    const moveY = 'center'; 
    
    // --------------------------------------------------

    // Áp dụng xử lý
    img.style.width = "100%";
    img.style.height = "100%";
    
    // Chế độ cover để ảnh luôn full khung không bị viền đen
    img.style.objectFit = "cover"; 
    
    // Căn chỉnh vị trí điểm nhìn
    img.style.objectPosition = `${moveX} ${moveY}`;
    
    // Áp dụng zoom nếu cần
    img.style.transform = `scale(${zoomLevel})`;
    
    // Đảm bảo ảnh mượt mà khi đổi
    img.style.transition = "all 0.5s ease";
}