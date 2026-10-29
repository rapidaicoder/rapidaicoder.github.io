---
layout: default
title: 码卡龙 MaClaw - 企业与个人的数智伴侣
description: 码卡龙 MaClaw 是可自进化的智能体平台：企业可治理的 AI 能力底座，个人的 AI 工作搭档，以及论文与学位论文的科研助学。
lang: zh-cn
permalink: /zh-cn/
---

<!-- Hero Section -->
<section class="hero-maclaw section">
  <div class="container hero-copy">
    <span class="maclaw-badge">企业与个人的数智伴侣</span>
    <h1 class="hero-title">码卡龙 <span class="title-en">MaClaw</span></h1>
    <p class="hero-subtitle">可自进化的智能体平台：企业有可治理的 AI 能力底座，个人有专属的 AI 工作搭档<br/>让 AI 真正记住你、懂你的业务、按企业规矩办事</p>
    <p class="hero-research-link"><a href="#research">科研助学：论文与学位论文</a></p>

  </div>
  <figure class="hero-stage">
    {% include product-stage.html %}
  </figure>
  <div class="container hero-downloads">
    <div class="download-zone">
      <div class="download-tabs" role="tablist">
        <button class="download-tab active" role="tab" aria-selected="true" data-target="dl-gui">{% include icon.html name="monitor" %} GUI 程序</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-tui">{% include icon.html name="keyboard" %} TUI 程序</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-data">{% include icon.html name="database" %} 数据服务器</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-cloud">{% include icon.html name="cloud" %} 云端平台</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-installer">{% include icon.html name="package" %} 安装器</button>
      </div>

      <div id="dl-gui" class="download-panel active" role="tabpanel">
        <div class="download-buttons">
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-Setup.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-Universal.pkg" class="btn-download btn-macos" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span class="btn-text">macOS</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-x86_64-u2404.AppImage" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.224.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.224.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux x86_64 · 24.04</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-x86_64-u2204.AppImage" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.222.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.222.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux x86_64 · 22.04</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-aarch64-u2404.AppImage" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.224.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.224.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux aarch64 · 24.04</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/MaClaw-aarch64-u2204.AppImage" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.222.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.222.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux aarch64 · 22.04</span>
          </a>
        </div>
      </div>

      <div id="dl-tui" class="download-panel" role="tabpanel" hidden>
        <div class="download-buttons">
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-windows-amd64-tui.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows AMD64</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-windows-arm64-tui.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows ARM64</span>
          </a>
        </div>
        <p class="download-note">macOS 与 Linux 请使用 GUI 程序或安装器，装好后运行 <code>maclaw-tui</code>。当前版本另提供 Windows 的 TUI 安装器。</p>
      </div>

      <div id="dl-data" class="download-panel" role="tabpanel" hidden>
        <div class="download-buttons">
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/maclaw-data-srv-Setup.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/maclaw-data-srv-Universal.pkg" class="btn-download btn-macos" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span class="btn-text">macOS</span>
          </a>
        </div>
      </div>

      <div id="dl-cloud" class="download-panel" role="tabpanel" hidden>
        <div class="download-buttons">
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/maclawsrv-Setup.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/maclawsrv-Universal.pkg" class="btn-download btn-macos" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span class="btn-text">macOS</span>
          </a>
        </div>
      </div>

      <div id="dl-installer" class="download-panel" role="tabpanel" hidden>
        <div class="download-buttons">
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-windows-amd64.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows AMD64</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-windows-arm64.exe" class="btn-download btn-windows" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            <span class="btn-text">Windows ARM64</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-darwin-amd64" class="btn-download btn-macos" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span class="btn-text">macOS AMD64</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-darwin-arm64" class="btn-download btn-macos" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span class="btn-text">macOS Apple Silicon</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-linux-amd64" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.224.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.224.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux AMD64</span>
          </a>
          <a href="https://github.com/RapidAI/MaClaw/releases/latest/download/Ins-maclaw-linux-arm64" class="btn-download btn-linux" target="_blank">
            <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.135.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .419.062.6.187l.003.003c.234.156.386.396.429.664.044.27-.027.542-.191.756l-.002.002c-.156.202-.386.335-.639.371-.253.036-.508-.027-.715-.178l-.003-.002c-.234-.156-.386-.397-.429-.665-.044-.27.027-.542.191-.756l.002-.002c.156-.202.386-.335.639-.371.036-.005.07-.007.102-.009zm-.141 1.74c.101 0 .2.025.287.071.19.1.299.29.299.494 0 .203-.109.393-.299.493-.087.046-.186.07-.287.07-.101 0-.2-.024-.287-.07-.19-.1-.299-.29-.299-.493 0-.204.109-.394.299-.494.087-.046.186-.07.287-.07zm-1.14.576c.077 0 .153.015.224.045.22.088.36.29.36.513 0 .223-.14.425-.36.513-.071.03-.147.045-.224.045-.077 0-.153-.015-.224-.045-.22-.088-.36-.29-.36-.513 0-.223.14-.425.36-.513.071-.03.147-.045.224-.045zm1.714 1.41c.312 0 .6.166.756.436.156.27.156.602 0 .872-.156.27-.444.436-.756.436-.312 0-.6-.166-.756-.436-.156-.27-.156-.602 0-.872.156-.27.444-.436.756-.436z"/></svg>
            <span class="btn-text">Linux ARM64</span>
          </a>
        </div>
      </div>

    </div><!-- /.download-zone -->
  </div>
</section>

<!-- 科研助学 -->
<section class="education-section section" id="research">
  <div class="container">
    <h2 class="section-title">科研助学，陪你把论文做完</h2>
    <p class="section-subtitle">研究方向、学术论文和硕博毕业论文的撰写、框架、评审、群组共读与远程评审，都落在 MaClaw 已有的学术工作流、专家和文件伴读上。</p>
    <div class="scenario-banner">
      <span class="scenario-label">教育科研</span>
      <h3 class="scenario-headline">八件已经能交给 MaClaw 的学术工作</h3>
    </div>
    <div class="scenario-grid">
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="compass" %}</span>
          <h3>研究方向制定</h3>
        </div>
        <p class="scenario-desc">从文献综述开始：界定主题、制定检索策略、筛选文献、归纳缺口。基金与人才项目工作流再把缺口收成研究计划——核心科学问题、可行性，以及说得清的方向。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">文献综述</span>
          <span class="scenario-tag">基金申请</span>
          <span class="scenario-tag">国自然计划</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="pen" %}</span>
          <h3>学术论文撰写</h3>
        </div>
        <p class="scenario-desc">「论文写作」工作流分阶段推进：大纲、文献梳理、正文、图表、润色，每一步经你确认再往下走。论文润色专家和论文翻译专家守住术语。LaTeX 论文专家直接写进你的 .tex 模板，并提示编译预览。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">论文写作</span>
          <span class="scenario-tag">润色</span>
          <span class="scenario-tag">翻译</span>
          <span class="scenario-tag">LaTeX</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="ruler" %}</span>
          <h3>毕业论文框架整理</h3>
        </div>
        <p class="scenario-desc">论文写作的「大纲设计」阶段先把章节框架定下来，再落正文。LaTeX 论文专家会先读学位论文模板的主文件和引入的章节，沿用这套结构。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">大纲阶段</span>
          <span class="scenario-tag">学位论文模板</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="graduation" %}</span>
          <h3>硕博毕业论文撰写</h3>
        </div>
        <p class="scenario-desc">在你已经在用的学位论文模板上写。LaTeX 论文专家按章改写入 .tex，论文写作工作流负责需要你逐段确认的草稿。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">LaTeX 学位论文</span>
          <span class="scenario-tag">分章草稿</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="search" %}</span>
          <h3>学术论文评审</h3>
        </div>
        <p class="scenario-desc">论文润色专家在不改原意的前提下审语言，并逐处给出修改说明。把 PDF 放进文件伴读，意见就留在这篇论文上。长江学者与国自然（杰青、优青、青基、面上、重点）申请书评审工作流按完整性、成果、研究计划、撰写质量出具综合报告。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">润色审查</span>
          <span class="scenario-tag">伴读批注</span>
          <span class="scenario-tag">申请书评审</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="clipboard" %}</span>
          <h3>硕博毕业论文评审</h3>
        </div>
        <p class="scenario-desc">把学位论文放进文件伴读，批注留在这一份文件上。润色专家按章节看语言和结构。分享之后，主持人先通过或忽略每条批注，回复才会写回给群组看见。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">分章批注</span>
          <span class="scenario-tag">主持人审核</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="library" %}</span>
          <h3>论文辅助阅读与群组分享</h3>
        </div>
        <p class="scenario-desc">粘贴 arXiv 编号或链接，文件伴读会下载 PDF 并单独开一个标签，对话只讨论这一篇。分享给同学或课题组后，提问变成批注；主持人通过或忽略；通过的回复，所有能看到分享的人都能读到。划词改写、笔记和论文解读留在本机。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">arXiv</span>
          <span class="scenario-tag">文件伴读</span>
          <span class="scenario-tag">群组分享</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="globe" %}</span>
          <h3>远程论文评审</h3>
        </div>
        <p class="scenario-desc">评审人不必坐在作者电脑前。伴读分享走 Hub：参与者在自己的 MaClaw 里写批注，主持人审核，回复记在同一份分享上。Hub 远程会话也让你离开座位后继续这场评审。</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Hub 分享</span>
          <span class="scenario-tag">远程会话</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 数智伴侣 · 纵向 Tab 切换 -->
<section class="companion-section section">
  <div class="container">
    <h2 class="section-title">数智伴侣 · 两种身份，一套底座</h2>
    <p class="section-subtitle">企业级治理能力 + 个人级贴身陪伴，共享同一套记忆、知识与能力体系</p>

    <div class="companion-tabs">
      <!-- 纵向 Tab 导航 -->
      <div class="companion-tabnav" role="tablist" aria-orientation="vertical">
        <button type="button" class="companion-tab active" role="tab" aria-selected="true" data-target="tab-enterprise">
          <span class="tab-icon">{% include icon.html name="building" %}</span>
          <span class="tab-label">
            <span class="tab-title">企业数智伴侣</span>
            <span class="tab-desc">可治理的 AI 能力底座</span>
          </span>
        </button>
        <button type="button" class="companion-tab" role="tab" aria-selected="false" data-target="tab-personal">
          <span class="tab-icon">{% include icon.html name="user" %}</span>
          <span class="tab-label">
            <span class="tab-title">个人数智伴侣</span>
            <span class="tab-desc">你的私人 AI 工作搭档</span>
          </span>
        </button>
        <button type="button" class="companion-tab" role="tab" aria-selected="false" data-target="tab-digital-employee">
          <span class="tab-icon">{% include icon.html name="bot" %}</span>
          <span class="tab-label">
            <span class="tab-title">数字员工</span>
            <span class="tab-desc">降本增效的 AI 员工</span>
          </span>
        </button>
      </div>

      <!-- Tab 面板 -->
      <div class="companion-panels">
        <!-- 企业 -->
        <div id="tab-enterprise" class="companion-panel active" role="tabpanel">
          <h3 class="panel-headline">能下发的能力，远不止"AI 助手"</h3>
          <p class="panel-lead">从日常办公到企业 IT 系统、IT 运维、工厂生产线监控，企业把 Skill/MCP 能力包按需下发到员工与现场，构建专属于自己的 AI 能力底座。所有能力都可治理、可审计、可回收。</p>

          <!-- 四大能力场景 -->
          <div class="scenario-banner">
            <span class="scenario-label">企业能下发的能力场景</span>
            <h4 class="scenario-headline">一个 MaClaw，覆盖从办公桌到生产线</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="briefcase" %}</span>
                <h3>日常办公</h3>
              </div>
              <p class="scenario-desc">把企业的标准操作流程封装为 Skill 包下发到员工 MaClaw，文档、邮件、报销、审批、会议纪要按企业规范自动产出。</p>
              <ul class="scenario-features">
                <li>合同审查 / 投标响应 / 尽职调查工作流</li>
                <li>报销单、请假单等业务表单一键生成</li>
                <li>邮件起草、会议纪要、PPT 设计</li>
                <li>微信 / 飞书 / QQ / Telegram / 蓝信随时调用</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Skill</span>
                <span class="scenario-tag">工作流</span>
                <span class="scenario-tag">文档 / IM</span>
              </div>
            </div>

            <div class="scenario-card scenario-it-sys">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="folders" %}</span>
                <h3>完整企业 IT 系统</h3>
                <span class="scenario-pill">替代传统 MIS</span>
              </div>
              <p class="scenario-desc">结构化数据服务（MaClawDataSrv）+ Agent 动态 UI（AG-UI），用自然语言取代固定菜单、固定页面、固定表单，覆盖企业 30+ 业务模板。</p>
              <ul class="scenario-features">
                <li>销售 / 财务 / HR / 法务 / 采购 / 库存 / 固定资产全 Schema</li>
                <li>说"昨天去杭州见客户，高铁 174"自动识别为报销单</li>
                <li>业务规则引擎 + 审批流程 + 操作计划</li>
                <li>SQLite / PostgreSQL 同一 API 无缝切换</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">DataSrv</span>
                <span class="scenario-tag">AG-UI</span>
                <span class="scenario-tag">业务操作</span>
              </div>
            </div>

            <div class="scenario-card scenario-itops">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="wrench" %}</span>
                <h3>IT 运维</h3>
              </div>
              <p class="scenario-desc">把运维 SOP 封装为 Skill / 直通任务下发到运维工程师机器，从日常巡检到应急救援都能用对话或一条命令搞定。</p>
              <ul class="scenario-features">
                <li>SSH 远程管理 10 路并发，密码/密钥/Agent 认证</li>
                <li>直通任务一键执行：重启、备份、回滚、清理</li>
                <li>定时巡检 + 异常告警 + 自动生成运维报告</li>
                <li>高风险操作强制审批，全程审计追踪</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">SSH</span>
                <span class="scenario-tag">直通任务</span>
                <span class="scenario-tag">定时任务</span>
              </div>
            </div>

            <div class="scenario-card scenario-factory">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="factory" %}</span>
                <h3>工厂生产线监控</h3>
              </div>
              <p class="scenario-desc">通过企业自管 MCP 接入 PLC / SCADA / MES 数据，MaClaw 在产线驻场，自动采集指标、识别异常、推送告警、生成日报。</p>
              <ul class="scenario-features">
                <li>MCP 对接 PLC / SCADA / IoT 网关</li>
                <li>视觉模型自动巡检设备状态与产线异常</li>
                <li>长期目标在预算内持续推进，适合无人值守</li>
                <li>设备数据进入企业知识库，长期沉淀</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">MCP</span>
                <span class="scenario-tag">视觉巡检</span>
                <span class="scenario-tag">边缘部署</span>
              </div>
            </div>
          </div>

          <!-- 治理能力 · 精简 -->
          <div class="govern-banner">
            <span class="govern-label">企业治理能力</span>
            <h4 class="govern-headline">每一个能下发的能力，都被治理约束</h4>
          </div>

          <div class="enterprise-grid">
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="store" %}</div>
              <h3>私有能力市场</h3>
              <p>企业自管 Skill/MCP 能力库，审批入库后由员工 MaClaw 优先调用。</p>
              <ul class="feature-list">
                <li>能力审批入库，来源全部留痕</li>
                <li>付费能力企业统一采购，license 不流出</li>
                <li>员工无感切换，企业内能力优先</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="inbox" %}</div>
              <h3>下发与推荐</h3>
              <p>管理员可强制下发，也可只做推荐，按部门 / 角色 / 设备类型分发。</p>
              <ul class="feature-list">
                <li>下发：进入企业状态自动安装、失败重试</li>
                <li>推荐：在能力市场提示，用户自主安装</li>
                <li>用户卸载后下次同步自动重装</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="file-pen" %}</div>
              <h3>来源校验与撤回</h3>
              <p>每一个能力包都带来源链路、版本与校验信息，可一键撤回。</p>
              <ul class="feature-list">
                <li>SHA-256 checksum + 签名校验</li>
                <li>版本固定 (pinned) 与跟随最新 (latest_approved)</li>
                <li>能力可撤回、可禁用、可回滚</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="archive" %}</div>
              <h3>数据主权与多租户</h3>
              <p>企业数据留在自己的 Hub 内，云端不读企业经营数据。</p>
              <ul class="feature-list">
                <li>按 tenant / user 物理路径隔离</li>
                <li>数据库表均带 tenant_id 主键</li>
                <li>License 集中签发、企业侧离线验签</li>
              </ul>
            </div>
          </div>

          <!-- 企业级安全管理 · 6 张卡 -->
          <div class="security-banner">
            <span class="security-label">企业级安全管理</span>
            <h4 class="security-headline">从凭据、传输到行为审批，全链路硬实力</h4>
          </div>

          <div class="enterprise-grid">
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="lock" %}</div>
              <h3>鉴权与凭据</h3>
              <p>多层凭据机制，每一把钥匙都经过强算法摘要与生命周期管理。</p>
              <ul class="feature-list">
                <li>scrypt (N=32768) + pepper 密码摘要</li>
                <li>HMAC-SHA256 会话 Token，bcrypt Admin Secret</li>
                <li>凭据五状态：active / suspended / revoked / expired / expiring</li>
                <li>明文仅返回一次，旋转后自动 masked</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="shield" %}</div>
              <h3>权限策略引擎</h3>
              <p>用户组树自上而下的有效策略，五动作 + 四档预设全面控制。</p>
              <ul class="feature-list">
                <li>策略五动作：allow / deny / ask / audit / user_override</li>
                <li>四档预设：standard / strict / offline / developer</li>
                <li>三级能力源白名单：全局 / 租户 / 用户</li>
                <li>多角色 RBAC：admin / data_admin / data_user / auditor</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="key" %}</div>
              <h3>端到端加密</h3>
              <p>能力包、License、传输全链路加密，私钥与密钥分离存储。</p>
              <ul class="feature-list">
                <li>能力包：RSA-2048 + AES-256-GCM + PBKDF2 10 万次</li>
                <li>License：RSA-SHA256 签发，企业侧离线验签</li>
                <li>TLS 1.2 最低版本，邮件链路 StartTLS</li>
                <li>私钥 0o600 权限落盘，密钥分离管理</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="blocks" %}</div>
              <h3>沙箱与隔离</h3>
              <p>能力执行环境与网络范围都可控，多租户在物理层就分开。</p>
              <ul class="feature-list">
                <li>沙箱三档：none / os / docker</li>
                <li>网络三档：full / intranet / none</li>
                <li>YOLO 模式可关闭，按租户/用户配置</li>
                <li>多租户物理路径与数据库分库隔离</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="scroll" %}</div>
              <h3>审计、脱敏与注入防护</h3>
              <p>每次调用结构化落档，敏感数据自动识别脱敏。</p>
              <ul class="feature-list">
                <li>JSONL 审计：50MB 滚动、30 天留存</li>
                <li>字段含 risk_level / decision / reason / sensitive_categories</li>
                <li>5 类敏感模式自动检测（API Key / AWS / 私钥 / 密码 / JWT）</li>
                <li>4 类 Prompt 注入检测，覆盖消息/工具/网页/文件</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="scale" %}</div>
              <h3>高风险操作审批</h3>
              <p>风险分级 + 双重确认 + 智能复核，重要操作不放过、轻量操作不打扰。</p>
              <ul class="feature-list">
                <li>风险四档：low / medium / high / critical</li>
                <li>直通任务默认 confirm_required=true</li>
                <li>Smart Approval：LLM 复核高风险操作</li>
                <li>Session Allowlist + 异步审批（2 分钟超时）</li>
              </ul>
            </div>
          </div>

          <div class="panel-cta">
            <a href="#capability-tiers" class="btn-primary">查看四级能力体系</a>
            <a href="mailto:znsoft@163.com" class="btn-secondary">企业部署咨询</a>
          </div>
        </div>

        <!-- 个人 -->
        <div id="tab-personal" class="companion-panel" role="tabpanel" hidden>
          <h3 class="panel-headline">不只是聊天，而是替你干活</h3>
          <p class="panel-lead">从文档处理到数据分析、电脑维护、留学申请、科研写作、图片处理，MaClaw 理解你的意图、记住你的偏好、调用知识与工具，从需求梳理到成果交付全程陪你走完。你说想法，它出成果。</p>

          <!-- 个人能力场景 -->
          <div class="scenario-banner scenario-banner-personal">
            <span class="scenario-label">个人能用上的场景能力</span>
            <h4 class="scenario-headline">一个 MaClaw，覆盖学习、工作、生活</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-doc">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="file" %}</span>
                <h3>文档处理</h3>
              </div>
              <p class="scenario-desc">Word / Excel / PPT / PDF 全格式生成、修改、转换，按你的风格和模板自动产出。</p>
              <ul class="scenario-features">
                <li>Markdown 一键转 Word / PDF</li>
                <li>Excel 读写、公式生成、数据透视</li>
                <li>PPT 从大纲到成稿，含视觉设计建议</li>
                <li>PDF 解析、合并、按章节抽取重写</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Word</span>
                <span class="scenario-tag">Excel</span>
                <span class="scenario-tag">PPT</span>
                <span class="scenario-tag">PDF</span>
              </div>
            </div>

            <div class="scenario-card scenario-data">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="chart" %}</span>
                <h3>数据分析</h3>
              </div>
              <p class="scenario-desc">把原始 Excel / CSV / 数据库导出文件交给 MaClaw，自然语言提问就能得到洞察和图表。</p>
              <ul class="scenario-features">
                <li>自动清洗、去重、缺失值处理</li>
                <li>多表关联分析与透视</li>
                <li>智能可视化（折线 / 柱状 / 散点 / 热力）</li>
                <li>趋势预测与异常点识别</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Excel/CSV</span>
                <span class="scenario-tag">可视化</span>
                <span class="scenario-tag">预测</span>
              </div>
            </div>

            <div class="scenario-card scenario-pcops">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="monitor" %}</span>
                <h3>电脑维护</h3>
              </div>
              <p class="scenario-desc">桌面 GUI 自动化 + 命令行任务，让 MaClaw 帮你操作电脑：装软件、清磁盘、改配置、跑脚本。</p>
              <ul class="scenario-features">
                <li>本机命令行、后台进程管理</li>
                <li>桌面 GUI 自动化，以及 Computer Use 的点击、输入和滚动</li>
                <li>Playbook 回放成功操作；PP-OCRv6 分 tiny / small / medium 三档</li>
                <li>定时任务自动执行常规操作</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">GUI 自动化</span>
                <span class="scenario-tag">命令行</span>
                <span class="scenario-tag">定时</span>
              </div>
            </div>

            <div class="scenario-card scenario-workflow">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="clipboard" %}</span>
                <h3>工作流模板</h3>
              </div>
              <p class="scenario-desc">38 种结构化工作流模板，按「需求确认 → 方案设计 → 分步执行」产出，每步可暂停、确认、修改。</p>
              <ul class="scenario-features">
                <li>商业计划、竞品分析、项目提案</li>
                <li>论文写作、毕业论文框架、学术评审</li>
                <li>合同审查、尽职调查、合规审计</li>
                <li>结果自动沉淀为长期记忆</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">38 种模板</span>
                <span class="scenario-tag">分步确认</span>
              </div>
            </div>

            <div class="scenario-card scenario-study">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="graduation" %}</span>
                <h3>留学申请</h3>
              </div>
              <p class="scenario-desc">从选校、文书到时间线管理，全程陪你走完留学申请流程，记住你的背景和偏好。</p>
              <ul class="scenario-features">
                <li>选校建议（按 GPA / 语言成绩 / 兴趣方向）</li>
                <li>个人陈述（PS / SOP）多轮打磨</li>
                <li>推荐信草稿与套磁邮件起草</li>
                <li>申请节点提醒与材料清单管理</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">文书</span>
                <span class="scenario-tag">选校</span>
                <span class="scenario-tag">时间线</span>
              </div>
            </div>

            <div class="scenario-card scenario-research">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="microscope" %}</span>
                <h3>科研助手</h3>
              </div>
              <p class="scenario-desc">把论文导入知识库，用文件伴读打开，再按学术工作流从研究方向走到毕业论文章节。<a href="#research">查看科研助学</a>。</p>
              <ul class="scenario-features">
                <li>文献综述：主题、检索、筛选、综述</li>
                <li>论文写作与 LaTeX 学位论文模板</li>
                <li>基金申请，以及国自然、长江学者申请书</li>
                <li>事实图谱：实体—关系—实体三元组</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">文献</span>
                <span class="scenario-tag">实验</span>
                <span class="scenario-tag">论文</span>
              </div>
            </div>

            <div class="scenario-card scenario-image">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="image" %}</span>
                <h3>图片处理</h3>
              </div>
              <p class="scenario-desc">通过 Skill / MCP 调用图像处理能力，从修图到生图、识图都能用对话完成。</p>
              <ul class="scenario-features">
                <li>抠图、去水印、批量缩放裁剪</li>
                <li>OCR 文字提取（中英混排）</li>
                <li>AI 生图 / 改图（接入主流模型）</li>
                <li>图像内容理解与描述生成</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">修图</span>
                <span class="scenario-tag">OCR</span>
                <span class="scenario-tag">生图</span>
              </div>
            </div>

            <div class="scenario-card scenario-memory">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="brain" %}</span>
                <h3>记忆 + 知识库</h3>
              </div>
              <p class="scenario-desc">长期记忆是内脑，知识库是外脑。跨会话记住你的偏好，导入文档为它注入专业知识。</p>
              <ul class="scenario-features">
                <li>BM25 + 向量双重语义检索</li>
                <li>艾宾浩斯遗忘曲线自动维护</li>
                <li>PDF / Word / 网页全格式导入</li>
                <li>历史会话全文检索，跨会话回溯</li>
                <li>文档内图片经 OCR 或视觉描述后可检索</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">长期记忆</span>
                <span class="scenario-tag">知识图谱</span>
              </div>
            </div>
          </div>

          <div class="panel-cta">
            <a href="https://github.com/RapidAI/MaClaw/releases/latest" class="btn-primary" target="_blank">立即下载</a>
            <a href="#workflows" class="btn-secondary">查看工作流模板</a>
          </div>
        </div>

        <!-- 数字员工 -->
        <div id="tab-digital-employee" class="companion-panel" role="tabpanel" hidden>
          <h3 class="panel-headline">数字员工 —— 不领薪资的 7×24 员工</h3>
          <p class="panel-lead">数字员工是 MaClaw 为企业打造的全新用工模式：既有物理员工的数字分身，也有无需物理岗位的云端虚拟化员工。两者协同，在不增加人力成本的前提下，大幅提升企业运转效率与服务覆盖能力。</p>
          <p class="panel-lead">每个数字员工是一个 MaClawSrv 实例，共享租户知识库，并按角色分配权限。可绑定微信、飞书、QQ、Telegram 或蓝信，对外以同事身份出现。管理员能看到在线状态、任务记录和告警。超出能力范围的请求会升级给对应的人，并把这次交接留下来。</p>

          <!-- 物理用户的数字分身 -->
          <div class="scenario-banner">
            <span class="scenario-label">物理用户的数字分身</span>
            <h4 class="scenario-headline">为每位员工配备专属 AI 分身，自动处理日常事务</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="coffee" %}</span>
                <h3>日常事务自动化</h3>
              </div>
              <p>自动处理邮件分类与回复建议、会议纪要生成、日程协调、差旅报销填写等重复性事务，将员工从琐碎流程中解放出来，专注于高价值工作。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">邮件处理</span>
                <span class="scenario-tag">日程管理</span>
                <span class="scenario-tag">报销自动化</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="message" %}</span>
                <h3>信息咨询代理</h3>
              </div>
              <p>数字分身持续学习员工所在领域的知识体系，代替员工回答常见问题、政策查询、制度解读等高频咨询，让员工只处理真正需要人工判断的复杂问题。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">智能问答</span>
                <span class="scenario-tag">政策查询</span>
                <span class="scenario-tag">7×24 在线</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="file-pen" %}</span>
                <h3>文档与报告生成</h3>
              </div>
              <p>自动汇总周报、月报、项目进度报告；根据数据源自动生成分析报告和可视化图表；草拟合同、方案书初稿，大幅减少文档撰写时间。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">周报月报</span>
                <span class="scenario-tag">数据分析</span>
                <span class="scenario-tag">文档草拟</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="link" %}</span>
                <h3>跨系统代办</h3>
              </div>
              <p>打通 OA、ERP、CRM 等企业系统，一条自然语言指令即可完成多步跨系统操作——"帮我把上周的报价单发给张总审批"，从此告别在多个系统间来回切换。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">OA/ERP/CRM</span>
                <span class="scenario-tag">一键操作</span>
                <span class="scenario-tag">自然语言</span>
              </div>
            </div>
          </div>

          <!-- 云端虚拟化员工 -->
          <div class="scenario-banner" style="margin-top: 40px;">
            <span class="scenario-label">云端虚拟化员工</span>
            <h4 class="scenario-headline">无需物理岗位，虚拟员工即刻上岗</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="building" %}</span>
                <h3>虚拟前台与客服</h3>
              </div>
              <p>7×24 小时在线接待访客咨询、客户答疑、产品介绍，支持多语言多渠道。替代传统基础客服岗位，响应速度更快、服务标准统一、培训成本为零。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">全天候服务</span>
                <span class="scenario-tag">多语言</span>
                <span class="scenario-tag">零培训成本</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="check" %}</span>
                <h3>流程审批助手</h3>
              </div>
              <p>自动审核标准业务流程（请假、采购、报销、合同），符合规则的秒批通过，异常情况自动上报给人工审批。将审批流转时间从小时级缩短到秒级。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">智能审批</span>
                <span class="scenario-tag">异常上报</span>
                <span class="scenario-tag">秒级流转</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="chart" %}</span>
                <h3>数据录入与校验</h3>
              </div>
              <p>自动从邮件、PDF、图片、网页等多源渠道采集结构化数据，完成录入、比对和校验，消除人工录入差错，释放数据岗位的人力投入。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">多源采集</span>
                <span class="scenario-tag">零差错</span>
                <span class="scenario-tag">自动校验</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="library" %}</span>
                <h3>知识库运维员</h3>
              </div>
              <p>持续学习企业文档、操作手册、产品资料，自动更新知识库条目，检测过时内容并标注更新建议，确保企业知识资产始终处于最新可用状态。</p>
              <div class="scenario-tags">
                <span class="scenario-tag">持续学习</span>
                <span class="scenario-tag">自动更新</span>
                <span class="scenario-tag">知识资产</span>
              </div>
            </div>
          </div>

          <div class="panel-cta">
            <a href="https://github.com/RapidAI/MaClaw/releases/latest" class="btn-primary" target="_blank">立即下载</a>
            <a href="#capability-tiers" class="btn-secondary">了解能力体系</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 四级能力体系 -->
<section class="capability-section section" id="capability-tiers">
  <div class="container">
    <h2 class="section-title">四级能力体系</h2>
    <p class="section-subtitle">企业优先用自己审批过的能力，外部能力按企业策略受控引入</p>

    <div class="capability-pyramid">
      <div class="capability-tier tier-1">
        <div class="tier-rank">优先级 1</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="building" %}</span>
            <div>
              <h3 class="tier-name">私有能力市场</h3>
              <p class="tier-sub">Enterprise Hub Marketplace</p>
            </div>
          </div>
          <p class="tier-desc">企业自建的 Skill/MCP 能力库，由管理员审批入库。企业内 MaClaw 默认优先调用，付费能力的 license 集中管理、不流出企业边界。</p>
          <div class="tier-tags">
            <span class="tier-tag">企业自管</span>
            <span class="tier-tag">审批可控</span>
            <span class="tier-tag">优先调用</span>
            <span class="tier-tag">license 集中</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-2">
        <div class="tier-rank">优先级 2</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="cloud" %}</span>
            <div>
              <h3 class="tier-name">公有能力市场</h3>
              <p class="tier-sub">HubCenter Marketplace</p>
            </div>
          </div>
          <p class="tier-desc">HubCenter 公有能力市场，包含官方 SkillHub 技能和商业合作伙伴。免费 Skill 可直接安装，付费 Skill/MCP 走企业采购流程。企业管理员可批量入库到自己的私有市场。</p>
          <div class="tier-tags">
            <span class="tier-tag">官方认证</span>
            <span class="tier-tag">商业能力</span>
            <span class="tier-tag">可采购可订阅</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-3">
        <div class="tier-rank">优先级 3</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="globe" %}</span>
            <div>
              <h3 class="tier-name">ClawHub</h3>
              <p class="tier-sub">社区能力源</p>
            </div>
          </div>
          <p class="tier-desc">社区共建的开放能力源，免费 Skill 可低摩擦试用、快速验证。验证成功的能力可沉淀到企业私有市场，转化为企业能力资产。</p>
          <div class="tier-tags">
            <span class="tier-tag">社区贡献</span>
            <span class="tier-tag">免费试用</span>
            <span class="tier-tag">先用后沉淀</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-4">
        <div class="tier-rank">优先级 4</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="git-branch" %}</span>
            <div>
              <h3 class="tier-name">GitHub</h3>
              <p class="tier-sub">开源生态</p>
            </div>
          </div>
          <p class="tier-desc">直连 GitHub 仓库的 Skill/MCP，提供极致广度的开源生态接入。企业管理员可设置白名单，控制可引入的来源范围。</p>
          <div class="tier-tags">
            <span class="tier-tag">开源仓库</span>
            <span class="tier-tag">极致广度</span>
            <span class="tier-tag">白名单受控</span>
          </div>
        </div>
      </div>
    </div>

    <div class="capability-routing">
      <h3 class="routing-title">{% include icon.html name="search" %} 企业状态下的智能路由</h3>
      <p>当 MaClaw 进入企业状态，能力查找顺序为：<strong>私有能力市场 → 公有能力市场 → ClawHub → GitHub</strong>。企业 Hub 已发布的能力优先使用；外部来源是否允许搜索、试用与入库，由企业策略决定。</p>
      <ul class="routing-rules">
        <li><strong>免费能力</strong>：可配置为"先试用、后沉淀"，验证成功的能力自动归档到企业市场。</li>
        <li><strong>付费能力</strong>：必须"先审批购买、再入库使用"，license 全程留在企业 Hub。</li>
        <li><strong>MCP 服务</strong>：缺少 secret 时显示"需要配置"，不阻塞主流程。</li>
      </ul>
    </div>
  </div>
</section>

<!-- 企业能力建设流程 -->
<section class="buildflow-section section">
  <div class="container">
    <h2 class="section-title">企业能力建设流程</h2>
    <p class="section-subtitle">四步把外部能力变成企业自有资产</p>

    <div class="buildflow-steps">
      <div class="buildflow-step">
        <div class="bf-num">01</div>
        <div class="bf-icon">{% include icon.html name="search" %}</div>
        <h3>发现</h3>
        <p>管理员在公有市场、ClawHub、GitHub 搜索匹配的 Skill/MCP，或员工提需求申请引入。</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">02</div>
        <div class="bf-icon">{% include icon.html name="check" %}</div>
        <h3>审批 / 采购</h3>
        <p>免费能力按策略试用或直接审批；付费能力走采购流程，license 由企业 Hub 集中持有。</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">03</div>
        <div class="bf-icon">{% include icon.html name="package" %}</div>
        <h3>入库发布</h3>
        <p>审核通过的能力进入私有能力市场，标注版本、权限白名单与来源溯源信息。</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">04</div>
        <div class="bf-icon">{% include icon.html name="send" %}</div>
        <h3>下发安装</h3>
        <p>按部门/角色/项目策略下发到员工 MaClaw，强制安装或推荐使用，失败自动重试。</p>
      </div>
    </div>

    <div class="buildflow-note">
      <strong>双轨策略：</strong>
      <span class="track-item"><span class="track-tag track-free">免费</span> 先用后沉淀 —— 试用验证成功的能力自动归档</span>
      <span class="track-item"><span class="track-tag track-paid">付费</span> 先审批后使用 —— license 集中、调用受控、不流出企业边界</span>
    </div>
  </div>
</section>

<!-- 工作流模板 -->
<section class="workflow-section section" id="workflows">
  <div class="container">
    <h2 class="section-title">办公工作流模板</h2>
    <p class="section-subtitle">38 种结构化工作流。下面是常用的一部分，学术写作与评审见「科研助学」</p>
    <div class="workflow-grid">
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="file-pen" %}</div>
        <h3>投标响应</h3>
        <p>招标文件解析、资质响应、技术方案编写、投标文件组装全流程</p>
        <span class="workflow-tag">企业</span>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="scroll" %}</div>
        <h3>合同审查</h3>
        <p>逐条风险分析、合规性检查、修改建议生成，支持各类合同</p>
        <span class="workflow-tag">企业</span>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="search" %}</div>
        <h3>尽职调查</h3>
        <p>商业、财务、法律、技术多维度尽调，生成完整尽调报告</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="chart" %}</div>
        <h3>合规审计</h3>
        <p>法规合规评估、风险评级、整改计划制定</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="file" %}</div>
        <h3>专利分析</h3>
        <p>现有技术检索、侵权风险评估、专利布局策略建议</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="coins" %}</div>
        <h3>商业计划</h3>
        <p>市场分析、财务预测、战略规划文档生成</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="target" %}</div>
        <h3>竞品分析</h3>
        <p>市场格局分析、竞争对手画像、战略定位建议</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="lightbulb" %}</div>
        <h3>创新方案</h3>
        <p>技术趋势分析、创新机会识别、研发规划</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="calendar" %}</div>
        <h3>活动策划</h3>
        <p>从概念到执行清单的完整活动组织工作流</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="laptop" %}</div>
        <h3>项目提案</h3>
        <p>项目范围定义、资源规划、时间线生成</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="library" %}</div>
        <h3>研究报告</h3>
        <p>文献综述、数据综合、学术报告撰写</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="palette" %}</div>
        <h3>PPT 设计</h3>
        <p>幻灯片结构规划、内容组织、视觉设计指导</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="library" %}</div>
        <h3>文献综述</h3>
        <p>主题、检索策略、筛选、分析，以及经你确认的综述成稿</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="pen" %}</div>
        <h3>论文写作</h3>
        <p>大纲、文献、正文、图表、润色，一个阶段确认后再进入下一阶段</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="flask" %}</div>
        <h3>实验设计</h3>
        <p>研究问题、假设、方法对比和实验方案</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="refresh" %}</div>
        <h3>论文复现</h3>
        <p>读论文、找代码和数据、复现基线，并写出实验报告</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="card" %}</div>
        <h3>基金申请</h3>
        <p>按你指定的基金整理研究基础、方案和申请书</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="landmark" %}</div>
        <h3>学术申报</h3>
        <p>长江学者，以及国自然杰青、优青、青基、面上、重点申请书</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="search" %}</div>
        <h3>学术评审</h3>
        <p>对应评审模板：完整性、成果、研究计划、撰写质量和综合报告</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="scroll" %}</div>
        <h3>专利申请</h3>
        <p>中国专利申请与美国 USPTO 专利申请工作流</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="graduation" %}</div>
        <h3>高考志愿</h3>
        <p>按分数、兴趣和约束给出志愿填报参考</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="laptop" %}</div>
        <h3>编程项目</h3>
        <p>MaClaw 自己的路径：需求、设计、任务、实现和验收</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="wrench" %}</div>
        <h3>维护变更</h3>
        <p>影响分析、重构与验证，或受控的运维变更</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="check" %}</div>
        <h3>标书检查</h3>
        <p>对照招标文件检查已写好的标书，并输出修改建议</p>
      </div>
    </div>
  </div>
</section>

<!-- 开发者能力（次要） -->
<section class="developer-section section">
  <div class="container">
    <h2 class="section-title">核心技术</h2>
    <p class="section-subtitle">支撑数智伴侣的底层引擎</p>
    <div class="developer-grid">
      <div class="developer-card">
        <h3>记忆架构</h3>
        <p>8 类记忆分类，语义/情景双层，时序层级，受保护条目</p>
      </div>
      <div class="developer-card">
        <h3>混合检索</h3>
        <p>BM25 关键词 + 向量相似度，SIMD 加速余弦计算</p>
      </div>
      <div class="developer-card">
        <h3>知识图谱</h3>
        <p>双向加权边，BFS 扩展，多种关系类型</p>
      </div>
      <div class="developer-card">
        <h3>遗忘曲线</h3>
        <p>艾宾浩斯衰减，可配置半衰期，休眠阈值</p>
      </div>
      <div class="developer-card">
        <h3>Swarm 编排器</h3>
        <p>任务拆分、冲突检测、自动合并、反馈循环协调</p>
      </div>
      <div class="developer-card">
        <h3>MCP 集成</h3>
        <p>本地 stdio 与远程 HTTP，自动发现与健康状态</p>
      </div>
      <div class="developer-card">
        <h3>工具路由</h3>
        <p>40+ 工具混合检索匹配，条件激活与渐进式暴露</p>
      </div>
      <div class="developer-card">
        <h3>工作流引擎</h3>
        <p>阶段执行，工具策略，双重确认，持久化存储</p>
      </div>
      <div class="developer-card">
        <h3>专家会话</h3>
        <p>论文润色、学术翻译、LaTeX 学位论文写作和 PPT 制作，并按能力档位约束工具</p>
      </div>
      <div class="developer-card">
        <h3>自我进化</h3>
        <p>缺技能时搜索 SkillHub，失败后自修复，并建议把成功过程存成技能</p>
      </div>
      <div class="developer-card">
        <h3>语音</h3>
        <p>本地 SenseVoice 转写、说话人标注、会议纪要草稿，以及 Kokoro 语音合成</p>
      </div>
      <div class="developer-card">
        <h3>Steering 规则</h3>
        <p>用 Markdown 写用户级或项目级行为规则，修改后 30 秒内重新生效</p>
      </div>
      <div class="developer-card">
        <h3>Computer Use</h3>
        <p>无障碍树加 PP-OCR 观察，点击与输入，以及可复用的 Playbook</p>
      </div>
      <div class="developer-card">
        <h3>长期目标</h3>
        <p>只有你明确要求时才创建；系统在预算内持续推进，直到完成或失败</p>
      </div>
      <div class="developer-card">
        <h3>文件伴读</h3>
        <p>本地文件或 arXiv PDF 与只讨论该文件的对话并排打开，并可经 Hub 分享</p>
      </div>
      <div class="developer-card">
        <h3>桌面宠物与设备</h3>
        <p>默认文字优先的桌面宠物，可选唤醒词；另有本地设备网关和面向 ESP32-S3 的 ClawMate</p>
      </div>
    </div>
  </div>
</section>

<!-- 快速开始 -->
<section class="quickstart-section section">
  <div class="container">
    <h2 class="section-title">快速开始</h2>
    <div class="quickstart-steps">
      <div class="step-item">
        <span class="step-num">1</span>
        下载安装
      </div>
      <div class="step-item">
        <span class="step-num">2</span>
        注册账号，选择专业或简洁模式
      </div>
      <div class="step-item">
        <span class="step-num">3</span>
        配置 LLM 服务商
      </div>
      <div class="step-item">
        <span class="step-num">4</span>
        按需绑定 IM，然后开始
      </div>
    </div>
    <div class="hero-btns" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px; flex-wrap: wrap;">
      <a href="https://maclaw.top" class="btn-primary" target="_blank">访问官网</a>
      <a href="https://github.com/rapidai/maclaw" class="btn-secondary" target="_blank">GitHub</a>
      <a href="mailto:znsoft@163.com" class="btn-secondary">企业咨询</a>
    </div>
  </div>
</section>
