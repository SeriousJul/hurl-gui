const _versions = (window as any).versions;
const information = document.getElementById('info')!
information.innerText = `This app is using Chrome (v${_versions.chrome()}), Node.js (v${_versions.node()}), and Electron (v${_versions.electron()})`