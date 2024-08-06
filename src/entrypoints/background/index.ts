export default defineBackground(() => {
  chrome?.sidePanel?.setPanelBehavior({ openPanelOnActionClick: true }).catch((error: unknown) => console.error(error))

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openSidePanel') {
      chrome.sidePanel.open({ tabId: sender.tab!.id, windowId: sender.tab!.windowId })
      sendResponse({ success: true })
    }
  })
})
