export const setValueToClipboard = async (prompt: string): Promise<void> => {
    //because "stage" and "production" on "http://" instead "https://"
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt);
    } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = prompt;

        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error: any) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
}
