export const limitText = (text, qty) => text.length > qty ? `${text.slice(0, qty)}...` : text
