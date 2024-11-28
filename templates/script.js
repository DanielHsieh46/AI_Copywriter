const photoUpload = document.getElementById('photo-upload');
const photoPreview = document.getElementById('upload-label');
const platformDropdown = document.getElementById('platform');
const body = document.body;
const submitBtn = document.getElementById('submit-btn');

// 處理圖片上傳並顯示預覽
photoUpload.addEventListener('change', () => {
    const file = photoUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // 將圖片顯示在圓框內
            photoPreview.innerHTML = `<img src="${e.target.result}" alt="上傳圖片">`;
        };
        reader.readAsDataURL(file);
    }
});

// 根據平台選擇更改背景顏色
platformDropdown.addEventListener('change', () => {
    const selectedPlatform = platformDropdown.value;

    if (selectedPlatform === 'instagram') {
        body.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
    } else if (selectedPlatform === 'facebook') {
        body.style.background = 'linear-gradient(45deg, #3b5998, #8b9dc3)';
    } else {
        body.style.background = 'linear-gradient(to bottom right, #e3f2fd, #f8f9fa)';
    }
});

// 處理提交按鈕的點擊事件
submitBtn.addEventListener('click', () => {
    const platform = platformDropdown.value;
    const length = document.getElementById('length').value;
    const style = document.getElementById('style').value;

    // 驗證是否填滿所有欄位
    if (!platform || !length || !style) {
        alert('請選擇平台、字數和風格！');
        return;
    }

    alert('提交成功！將資料傳送到後端...');
    // 可以在這裡加上傳送資料到後端的代碼
});
