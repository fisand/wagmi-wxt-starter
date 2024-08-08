export default defineContentScript({
  matches: ['https://www.google.com/*'],
  runAt: 'document_end',
  async main(ctx) {
    function openSidePanel() {
      chrome.runtime.sendMessage({ action: 'openSidePanel' })
    }

    const ui = await createIntegratedUi(ctx, {
      position: 'inline',
      onMount(container) {
        // Define how your UI will be mounted inside the container
        const button = document.createElement('button')
        button.textContent = 'Hello world!'
        button.id = 'openSidePanelButton'
        button.addEventListener('click', () => {
          openSidePanel()
        })
        container.append(button)
      },
    })

    ui.mount()
  },
})
