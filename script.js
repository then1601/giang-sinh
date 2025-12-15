/* --- TẠO HIỆU ỨNG TUYẾT RƠI --- */
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄'; // Hình bông tuyết
    snowflake.classList.add('snowflake');
    
    // Random vị trí xuất hiện (chiều ngang)
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Random kích thước
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    // Random tốc độ rơi
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
    
    // Random độ mờ
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    // Xóa tuyết sau khi rơi xong để tránh nặng máy
    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// Gọi hàm tạo tuyết liên tục mỗi 100ms
setInterval(createSnow, 100);

/* --- XỬ LÝ CLICK VÀ GÕ CHỮ --- */

// Nội dung thư
const fullMessage = "Gửi em! Giáng Sinh này lạnh lắm, nhưng trái tim anh luôn ấm áp vì có em bên cạnh. Chúc tình yêu của anh một mùa Noel hạnh phúc và ngập tràn yêu thương. Yêu em thật nhiều!";
const speed = 50; // Tốc độ gõ chữ (ms)
let i = 0;

function typeWriter() {
    if (i < fullMessage.length) {
        document.getElementById("message-text").innerHTML += fullMessage.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function openGift() {
    const giftBox = document.getElementById('gift-box');
    const card = document.getElementById('card');
    const audio = document.getElementById('bg-music');

    // 1. Ẩn hộp quà
    giftBox.style.display = 'none';

    // 2. Hiện tấm thiệp
    card.style.display = 'block';

    // 3. Phát nhạc
    // Lưu ý: Chrome chặn tự phát nhạc nếu chưa có tương tác, nhưng vì ta click vào hộp quà nên nhạc sẽ chạy tốt.
    if(audio) {
        audio.play().catch(error => console.log("Lỗi phát nhạc: ", error));
    }

    // 4. Chạy hiệu ứng gõ chữ
    typeWriter();
}