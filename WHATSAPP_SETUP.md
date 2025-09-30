# WhatsApp Chat Setup Instructions

## How to Update Your WhatsApp Number

1. Open `script.js` file
2. Find line 507 (approximately)
3. Replace the placeholder number with your actual WhatsApp number

```javascript
const WHATSAPP_NUMBER = '923123456789'; // Replace with your WhatsApp number
```

### Format Guidelines:
- Use international format
- Remove the `+` sign
- Example: If your number is +92 312 3456789, use: `923123456789`
- Example: If your number is +1 234 567 8900, use: `12345678900`

## Features Included:

### 1. Animated UA Logo
- Replaces the profile image with an animated "UA" text logo
- Features rotating circles and gradient color animation
- Fully responsive

### 2. WhatsApp Chat Widget
- **Hire Me Button**: Fixed button on the bottom right
- **Rich Text Editor**: Format your messages with:
  - Bold (Ctrl+B or click **B** button)
  - Italic (Ctrl+I or click *I* button)
  - Underline (Ctrl+U or click U button)
  - Strikethrough
  - Bullet lists
  - Numbered lists

### 3. Direct WhatsApp Sending
- Messages are formatted and sent directly to WhatsApp
- No text appears in WhatsApp input field
- Message opens in a new tab with pre-filled text
- Modal closes automatically after sending

## How It Works:

1. User clicks "Hire Me" button
2. Modal opens with text editor
3. User types and formats their message
4. User clicks send button or presses Enter
5. Message is converted to WhatsApp format:
   - Bold: `*text*`
   - Italic: `_text_`
   - Strikethrough: `~text~`
6. WhatsApp opens in new tab with the formatted message
7. User just needs to click send in WhatsApp

## Testing:
1. Click the "Hire Me" button
2. Type a message and use formatting tools
3. Click send
4. Verify WhatsApp opens with your formatted message

Enjoy your updated portfolio! 🚀
