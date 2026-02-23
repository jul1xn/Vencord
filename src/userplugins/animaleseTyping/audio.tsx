export function playAudio(key: string, gender: string) {
    const audio = new Audio(`/assets/audio/animalese/${gender}/voice_1/${key}.aac`);
    audio.play();
}
