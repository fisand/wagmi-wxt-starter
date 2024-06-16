// eslint-disable-next-line import/no-default-export
export default defineBackground(() => {
  chrome?.sidePanel?.setPanelBehavior({ openPanelOnActionClick: true }).catch((error: unknown) => console.error(error))
})
