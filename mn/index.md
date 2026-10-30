---
layout: default
title: MaClaw - Байгууллагын түвшний ерөнхий агент платформ
description: MaClaw бол өөрөө хувьсаж чаддаг, байгууллагын түвшний ерөнхий агент платформ: засаглагдах AI чадварын суурь, хувь хүний AI хамтрагч, тоон ажилтан, мөн салбарын шийдэл болох судалгааны туслалцаа.
lang: mn
permalink: /mn/
---

<!-- Hero Section -->
<section class="hero-maclaw section">
  <div class="container hero-copy">
    <span class="maclaw-badge">Байгууллагын түвшний ерөнхий агент платформ</span>
    <h1 class="hero-title">MaClaw</h1>
    <p class="hero-slogan"><span>Байгууллага бүрт өөрийн хиймэл оюуны агент</span></p>
    <p class="hero-subtitle">Өөрөө хувьсаж чаддаг агент платформ: аж ахуйн нэгжид засаглагдах AI чадварын суурь, хувь хүнд хувийн AI ажлын хамтрагч.<br/>Таныг санаж, бизнесийг тань ойлгож, дүрмийг дагадаг — аж ахуйн нэгжээс их сургууль, судалгааны баг хүртэл.</p>
    <p class="hero-research-link"><a href="#research">Салбарын шийдэл: өгүүлэл ба дипломын ажлын судалгааны туслалцаа</a></p>

  </div>
  <figure class="hero-stage">
    {% include product-stage.html %}
  </figure>
  <div class="container hero-downloads">
    <div class="download-zone">
      <div class="download-tabs" role="tablist">
        <button class="download-tab active" role="tab" aria-selected="true" data-target="dl-gui">{% include icon.html name="monitor" %} GUI програм</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-tui">{% include icon.html name="keyboard" %} TUI програм</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-data">{% include icon.html name="database" %} Өгөгдлийн сервер</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-cloud">{% include icon.html name="cloud" %} Үүлэн платформ</button>
        <button class="download-tab" role="tab" aria-selected="false" data-target="dl-installer">{% include icon.html name="package" %} Суулгагч</button>
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
        <p class="download-note">macOS болон Linux дээр GUI програм эсвэл суулгагчийг ашиглаад, терминалыг дараах командаар эхлүүлнэ <code>maclaw-tui</code>. Энэ хувилбар Windows-д зориулсан тусдаа TUI суулгагчтай.</p>
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

<!-- Companion · Vertical Tabs -->
<section class="companion-section section" id="platform">
  <div class="container">
    <h2 class="section-title">Нэг платформ, гурван хэрэглээ</h2>
    <p class="section-subtitle">Байгууллага, хувь хүн, тоон ажилтан нэг санах ой, мэдлэг, чадварын суурийг хуваалцана</p>

    <div class="companion-tabs">
      <!-- Vertical Tab Navigation -->
      <div class="companion-tabnav" role="tablist" aria-orientation="vertical">
        <button type="button" class="companion-tab active" role="tab" aria-selected="true" data-target="tab-enterprise">
          <span class="tab-icon">{% include icon.html name="building" %}</span>
          <span class="tab-label">
            <span class="tab-title">Аж ахуйн нэгжийн хамтрагч</span>
            <span class="tab-desc">Засаглагдах AI чадварын суурь</span>
          </span>
        </button>
        <button type="button" class="companion-tab" role="tab" aria-selected="false" data-target="tab-personal">
          <span class="tab-icon">{% include icon.html name="user" %}</span>
          <span class="tab-label">
            <span class="tab-title">Хувь хүний хамтрагч</span>
            <span class="tab-desc">Таны хувийн AI ажлын хамтрагч</span>
          </span>
        </button>
        <button type="button" class="companion-tab" role="tab" aria-selected="false" data-target="tab-digital-employee">
          <span class="tab-icon">{% include icon.html name="bot" %}</span>
          <span class="tab-label">
            <span class="tab-title">Тоон ажилтан</span>
            <span class="tab-desc">Зардал хэмнэх AI ажиллах хүч</span>
          </span>
        </button>
      </div>

      <!-- Tab Panels -->
      <div class="companion-panels">
        <!-- Enterprise -->
        <div id="tab-enterprise" class="companion-panel active" role="tabpanel">
          <h3 class="panel-headline">«AI туслах»-аас хол давсан, бодитоор түгээж чадах чадвар</h3>
          <p class="panel-lead">Өдөр тутмын оффисоос эхлээд байгууллагын IT систем, IT ашиглалт, үйлдвэрийн шугам хүртэл — байгууллага сонгосон Skill/MCP багцыг ажилтан ба талбайн төхөөрөмж рүү түгээж, өөрийн AI чадварын суурийг бүтээнэ. Чадвар бүр засаглагдаж, аудитлагдаж, буцаагдана.</p>

          <!-- Four Scenarios -->
          <div class="scenario-banner">
            <span class="scenario-label">Байгууллагад түгээх чадварын нөхцөл</span>
            <h4 class="scenario-headline">Нэг MaClaw, ширээнээс үйлдвэрийн шугам хүртэл</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="briefcase" %}</span>
                <h3>Өдөр тутмын оффис</h3>
              </div>
              <p class="scenario-desc">Стандарт ажиллагааг Skill багц болгон ажилтны MaClaw руу түгээнэ. Баримт, имэйл, зардал, баталгаажуулалт компанийн стандартыг автоматаар дагана.</p>
              <ul class="scenario-features">
                <li>Гэрээ хянах / тендерт хариулах / нягтлан шалгах ажлын урсгал</li>
                <li>Зардал, чөлөө болон бусад маягтыг нэг товшилтоор</li>
                <li>Имэйлийн ноорог, хурлын тэмдэглэл, PPT загвар</li>
                <li>WeChat / Feishu / QQ / Telegram / Lansenger-ээс хаанаас ч дуудна</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Skill</span>
                <span class="scenario-tag">Ажлын урсгал</span>
                <span class="scenario-tag">Баримт / IM</span>
              </div>
            </div>

            <div class="scenario-card scenario-it-sys">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="folders" %}</span>
                <h3>Байгууллагын бүрэн IT систем</h3>
                <span class="scenario-pill">Хуучин MIS-ийг орлоно</span>
              </div>
              <p class="scenario-desc">Бүтэцтэй өгөгдлийн үйлчилгээ (MaClawDataSrv) + Agent динамик UI (AG-UI) — тогтсон цэс, хуудас, маягтыг байгалийн хэлээр солино. 30+ бизнесийн загвар багтана.</p>
              <ul class="scenario-features">
                <li>Борлуулалт / санхүү / HR / хууль / худалдан авалт / нөөц / хөрөнгийн бүрэн схем</li>
                <li>«Өчигдөр Ханжоуд захиалагчтай уулзсан, галт тэрэг 174» гэвэл зардлын бичилт гэж танина</li>
                <li>Бизнесийн дүрмийн хөдөлгүүр + баталгаажуулалт + ажиллагааны төлөвлөгөө</li>
                <li>SQLite / PostgreSQL — нэг API, саадгүй сэлгэлт</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">DataSrv</span>
                <span class="scenario-tag">AG-UI</span>
                <span class="scenario-tag">Бизнесийн ажиллагаа</span>
              </div>
            </div>

            <div class="scenario-card scenario-itops">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="wrench" %}</span>
                <h3>IT ашиглалт</h3>
              </div>
              <p class="scenario-desc">Ашиглалтын SOP-оо Skill / шууд даалгавар болгон инженерийн машин руу түгээнэ. Ээлжит үзлэгээс яаралтай сэргээлт хүртэл яриа эсвэл нэг командаар.</p>
              <ul class="scenario-features">
                <li>SSH 10 зэрэгцээ сесс; нууц үг / түлхүүр / agent баталгаажуулалт</li>
                <li>Шууд даалгавар: дахин асаах, нөөцлөх, буцаах, цэвэрлэх</li>
                <li>Хуваарьт үзлэг, гажигийн анхааруулга, автомат ашиглалтын тайлан</li>
                <li>Өндөр эрсдэлтэй үйлдэл баталгаажуулалт шаардана; бүрэн аудитын мөр</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">SSH</span>
                <span class="scenario-tag">Шууд даалгавар</span>
                <span class="scenario-tag">Хуваарь</span>
              </div>
            </div>

            <div class="scenario-card scenario-factory">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="factory" %}</span>
                <h3>Үйлдвэрийн шугамын хяналт</h3>
              </div>
              <p class="scenario-desc">Байгууллагын MCP-ээр PLC / SCADA / MES өгөгдлийг холбоно. MaClaw талбай дээр үлдэж, үзүүлэлт цуглуулж, гажиг олж, анхааруулга илгээж, ээлжийн тайлан гаргана.</p>
              <ul class="scenario-features">
                <li>PLC / SCADA / IoT гарцтай MCP холболт</li>
                <li>Харааны загвар тоног төхөөрөмж ба шугамын гажгийг автоматаар үздэг</li>
                <li>Урт хугацааны зорилго консол дээр хүн байхгүй үед даалгаврыг үргэлжлүүлнэ</li>
                <li>Тоног төхөөрөмжийн өгөгдөл байгууллагын мэдлэгийн санд орно</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">MCP</span>
                <span class="scenario-tag">Харааны үзлэг</span>
                <span class="scenario-tag">Захын байршуулалт</span>
              </div>
            </div>
          </div>

          <!-- Governance · Compact -->
          <div class="govern-banner">
            <span class="govern-label">Байгууллагын засаглал</span>
            <h4 class="govern-headline">Түгээх чадвар бүр засаглалд захирагдана</h4>
          </div>

          <div class="enterprise-grid">
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="store" %}</div>
              <h3>Хувийн чадварын зах</h3>
              <p>Байгууллага удирддаг Skill/MCP сан. Ажилтны MaClaw энд батлагдаж хадгалагдсан чадварыг түрүүлж дуудна.</p>
              <ul class="feature-list">
                <li>Зөвхөн батлагдсан оруулалт, эх сурвалж бүрэн тэмдэглэгдэнэ</li>
                <li>Төлбөртэй чадварыг төвлөрүүлж худалдаж авна; лиценз байгууллагаас гарахгүй</li>
                <li>Ажилтанд саадгүй — байгууллагын чадвар үргэлж түрүүлнэ</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="inbox" %}</div>
              <h3>Түгээлт ба зөвлөмж</h3>
              <p>Админ албадан түгээж эсвэл зөвлөж болно. Хүрээ нь хэлтэс / үүрэг / төхөөрөмжийн төрөл.</p>
              <ul class="feature-list">
                <li>Түгээлт: байгууллагад нэгдмэгц автоматаар сууна, алдвал дахин оролдоно</li>
                <li>Зөвлөмж: захад харагдана, хэрэглэгч өөрөө сонгоно</li>
                <li>Устгасан түгээлт дараагийн синк дээр дахин сууна</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="file-pen" %}</div>
              <h3>Эх сурвалжийн баталгаа ба цуцлалт</h3>
              <p>Чадварын багц бүр эх сурвалж, хувилбар, шалгах нийлбэртэй бөгөөд нэг товшилтоор цуцлагдана.</p>
              <ul class="feature-list">
                <li>SHA-256 шалгах нийлбэр + гарын үсгийн баталгаа</li>
                <li>Тогтоосон хувилбар ба сүүлд батлагдсаныг дагах</li>
                <li>Чадварыг цуцлах, унтраах, буцаах боломжтой</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="archive" %}</div>
              <h3>Өгөгдлийн бүрэн эрх ба олон түрээслэгч</h3>
              <p>Байгууллагын өгөгдөл таны Hub дотор үлдэнэ; үүл бизнесийн өгөгдлийг уншихгүй.</p>
              <ul class="feature-list">
                <li>Түрээслэгч / хэрэглэгч бүрт физик замын тусгаарлалт</li>
                <li>Хүснэгт бүр tenant_id түлхүүртэй</li>
                <li>Лицензийг төвлөрүүлж гарын үсэг зурж, байран дээр офлайнаар шалгана</li>
              </ul>
            </div>
          </div>

          <!-- Enterprise Security · 6 cards -->
          <div class="security-banner">
            <span class="security-label">Байгууллагын түвшний аюулгүй байдал</span>
            <h4 class="security-headline">Нэвтрэх эрхээс дамжуулалт, үйлдлийн баталгаа хүртэл төгсгөлөөс төгсгөл хүртэл хатуу баталгаа</h4>
          </div>

          <div class="enterprise-grid">
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="lock" %}</div>
              <h3>Баталгаажуулалт ба нэвтрэх эрх</h3>
              <p>Давхаргат нэвтрэх эрхийн загвар — түлхүүр бүр хүчтэй хэш ба бүрэн амьдралын мөчлөгөөр дамжина.</p>
              <ul class="feature-list">
                <li>Нууц үгийн хэш: scrypt (N=32768) + pepper</li>
                <li>HMAC-SHA256 сессийн токен, bcrypt админ нууц</li>
                <li>Таван төлөв: active / suspended / revoked / expired / expiring</li>
                <li>Нээлттэй текст нэг л удаа буцна; эргүүлсний дараа далдлана</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="shield" %}</div>
              <h3>Бодлогын хөдөлгүүр</h3>
              <p>Хэрэглэгчийн бүлгийн модноос дээрээс доош хүчин төгөлдөр бодлого, таван үйлдэл, дөрвөн урьдчилсан тохиргоо.</p>
              <ul class="feature-list">
                <li>Таван үйлдэл: allow / deny / ask / audit / user_override</li>
                <li>Дөрвөн тохиргоо: standard / strict / offline / developer</li>
                <li>Чадварын эх сурвалжийн гурван түвшний зөвшөөрөл: global / tenant / user</li>
                <li>Олон үүрэгт RBAC: admin / data_admin / data_user / auditor</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="key" %}</div>
              <h3>Төгсгөлөөс төгсгөлийн шифрлэлт</h3>
              <p>Чадварын багц, лиценз, дамжуулалт бүгд шифрлэгдэнэ; хувийн түлхүүр өгөгдлийн түлхүүрээс тусад нь хадгалагдана.</p>
              <ul class="feature-list">
                <li>Чадварын багц: RSA-2048 + AES-256-GCM + PBKDF2 100 мянга</li>
                <li>Лиценз: RSA-SHA256 гарын үсэг, байгууллага офлайнаар шалгана</li>
                <li>TLS хамгийн багадаа 1.2; имэйлийн холбоос StartTLS</li>
                <li>Хувийн түлхүүр 0o600 эрхтэй, түлхүүр тусгаарлах бодлоготой</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="blocks" %}</div>
              <h3>Sandbox ба тусгаарлалт</h3>
              <p>Гүйцэтгэлийн орчин ба сүлжээний хүрээ хоёуланг тохируулна — түрээслэгчид физик давхарга дээр тусгаарлагдана.</p>
              <ul class="feature-list">
                <li>Sandbox горим: none / os / docker</li>
                <li>Сүлжээний түвшин: full / intranet / none</li>
                <li>YOLO горимыг түрээслэгч / хэрэглэгчээр унтрааж болно</li>
                <li>Олон түрээслэгчийн зам ба өгөгдлийн сангийн тусгаарлалт</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="scroll" %}</div>
              <h3>Аудит, далдлалт, тарилтын хамгаалалт</h3>
              <p>Дуудлага бүр бүтэцтэйгээр бүртгэгдэнэ; эмзэг өгөгдөл автоматаар олдож далдлагдана.</p>
              <ul class="feature-list">
                <li>JSONL аудитын бүртгэл: 50MB эргэлт, 30 хоног хадгалалт</li>
                <li>Талбарууд: risk_level / decision / reason / sensitive_categories</li>
                <li>5 суурилагдсан эмзэг загвар (API түлхүүр / AWS / хувийн түлхүүр / нууц үг / JWT)</li>
                <li>Мессеж, хэрэгсэл, вэб, файл дээрх 4 ангиллын prompt тарилтын илрүүлэлт</li>
              </ul>
            </div>
            <div class="enterprise-card">
              <div class="enterprise-icon">{% include icon.html name="scale" %}</div>
              <h3>Өндөр эрсдэлтэй үйлдлийн баталгаа</h3>
              <p>Эрсдэлийн түвшин + давхар баталгаа + ухаалаг хяналт — чухал үйлдлийг зогсоож, энгийн үйлдэл саад болохгүй.</p>
              <ul class="feature-list">
                <li>Эрсдэлийн түвшин: low / medium / high / critical</li>
                <li>Шууд даалгавар анхдагчаар confirm_required=true</li>
                <li>Ухаалаг баталгаа: өндөр эрсдэлтэй үйлдлийг LLM дахин хянана</li>
                <li>Сессийн зөвшөөрөл + асинхрон баталгаа (2 минутын хугацаа)</li>
              </ul>
            </div>
          </div>

          <div class="panel-cta">
            <a href="#capability-tiers" class="btn-primary">4 түвшний чадварын системийг харах</a>
            <a href="mailto:znsoft@163.com" class="btn-secondary">Аж ахуйн нэгжийн лавлагаа</a>
          </div>
        </div>

        <!-- Personal -->
        <div id="tab-personal" class="companion-panel" role="tabpanel" hidden>
          <h3 class="panel-headline">Чатбот биш — ажлыг нь хийдэг</h3>
          <p class="panel-lead">Баримт боловсруулахаас өгөгдлийн шинжилгээ, компьютерын арчилгаа, гадаадад суралцах өргөдөл, судалгааны бичвэр, зураг боловсруулалт хүртэл — MaClaw зорилгыг тань ойлгож, дуртай зүйлсийг санаж, мэдлэг ба хэрэгслийг дуудаж, шаардлагаас үр дүн хүртэл хамт явна. Та санаагаа хэлнэ, тэр үр дүнг гаргана.</p>

          <!-- Personal Scenarios -->
          <div class="scenario-banner scenario-banner-personal">
            <span class="scenario-label">MaClaw тохирох нөхцөлүүд</span>
            <h4 class="scenario-headline">Нэг MaClaw, сурлага, ажил, амьдралыг хамарна</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-doc">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="file" %}</span>
                <h3>Баримт боловсруулалт</h3>
              </div>
              <p class="scenario-desc">Word / Excel / PPT / PDF — таны хэв маяг, загвараар үүсгэж, засаж, хөрвүүлнэ.</p>
              <ul class="scenario-features">
                <li>Markdown-аас Word / PDF руу нэг товшилтоор</li>
                <li>Excel унших/бичих, томьёо, пивот хүснэгт</li>
                <li>PPT-г бүтцээс илтгэл хүртэл, дизайны саналтай</li>
                <li>PDF задлах, нэгтгэх, хэсгээр дахин бичих</li>
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
                <h3>Өгөгдлийн шинжилгээ</h3>
              </div>
              <p class="scenario-desc">Түүхий Excel / CSV / DB экспортоо өгөөд, байгалийн хэлээр асуухад дүгнэлт ба график гарна.</p>
              <ul class="scenario-features">
                <li>Автомат цэвэрлэгээ, давхардал арилгалт, дутуу утга</li>
                <li>Олон хүснэгтийн холболт ба пивот</li>
                <li>Ухаалаг дүрслэл (шугам / багана / цацалт / дулааны зураг)</li>
                <li>Хандлагын таамаг ба хэт утга илрүүлэлт</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Excel/CSV</span>
                <span class="scenario-tag">Дүрслэл</span>
                <span class="scenario-tag">Таамаг</span>
              </div>
            </div>

            <div class="scenario-card scenario-pcops">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="monitor" %}</span>
                <h3>Компьютерын арчилгаа</h3>
              </div>
              <p class="scenario-desc">Ширээний GUI автоматжуулалт + командын мөрийн даалгавар — MaClaw таны компьютерыг жолоодно: програм суулгах, диск цэвэрлэх, тохиргоо засах, скрипт ажиллуулах.</p>
              <ul class="scenario-features">
                <li>Дотоод CLI ба арын процессийн удирдлага</li>
                <li>Ширээний GUI автоматжуулалт, мөн Computer Use-ийн товшилт, бичилт, гүйлгэлт</li>
                <li>Playbook амжилттай дарааллыг дахин тоглоно; PP-OCRv6 түвшин tiny, small, medium</li>
                <li>Ээлжит ажиллагаанд хуваарьт даалгавар</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">GUI автоматжуулалт</span>
                <span class="scenario-tag">CLI</span>
                <span class="scenario-tag">Хуваарь</span>
              </div>
            </div>

            <div class="scenario-card scenario-workflow">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="clipboard" %}</span>
                <h3>Ажлын урсгалын загвар</h3>
              </div>
              <p class="scenario-desc">38 бүтэцтэй ажлын урсгалын загвар «шаардлага → загвар → алхам алхмаар гүйцэтгэл»-ийг дагана — алхам бүрт зогсоож, баталгаажуулж, засаж болно.</p>
              <ul class="scenario-features">
                <li>Бизнес төлөвлөгөө, өрсөлдөгчийн шинжилгээ, төслийн санал</li>
                <li>Өгүүлэл бичих, дипломын бүтэц, эрдмийн хяналт</li>
                <li>Гэрээ хянах, нягтлан шалгалт, нийцлийн аудит</li>
                <li>Үр дүн урт хугацааны санах ой руу автоматаар сууна</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">38 загвар</span>
                <span class="scenario-tag">Алхам батлах</span>
              </div>
            </div>

            <div class="scenario-card scenario-study">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="graduation" %}</span>
                <h3>Гадаадад суралцах</h3>
              </div>
              <p class="scenario-desc">Сургууль сонгохоос эссэ, хугацааны удирдлага хүртэл — MaClaw таны суурь ба дуртай зүйлийг санаж бүх замыг хамт явна.</p>
              <ul class="scenario-features">
                <li>Сургуулийн товч жагсаалт (GPA / хэлний оноо / сонирхлоор)</li>
                <li>Хувийн мэдэгдэл (PS / SOP)-ийг давтан найруулах</li>
                <li>Зөвлөмжийн захидлын ноорог ба холбоо барих имэйл</li>
                <li>Эцсийн хугацааны сануулга ба материалын жагсаалт</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Эссэ</span>
                <span class="scenario-tag">Сургууль сонголт</span>
                <span class="scenario-tag">Хугацаа</span>
              </div>
            </div>

            <div class="scenario-card scenario-research">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="microscope" %}</span>
                <h3>Судалгааны туслах</h3>
              </div>
              <p class="scenario-desc">Өгүүллийг мэдлэгийн санд оруулж, файл хамтрагч дээр нээгээд, судалгааны чиглэлээс дипломын бүлэг хүртэл эрдмийн ажлын урсгалаар явна. <a href="#research">Судалгааны туслалцааг нээх</a>.</p>
              <ul class="scenario-features">
                <li>Ном зүйн тойм: сэдэв, хайлт, шүүлт, нэгтгэл</li>
                <li>Өгүүлэл бичих ба LaTeX дипломын загвар</li>
                <li>Санхүүжилтийн өргөдөл, NSFC ба Changjiang Scholar-ын өргөдөл</li>
                <li>Баримтын граф: зүйл–харилцаа–зүйл гурвал</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Ном зүй</span>
                <span class="scenario-tag">Туршилт</span>
                <span class="scenario-tag">Бичих</span>
              </div>
            </div>

            <div class="scenario-card scenario-image">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="image" %}</span>
                <h3>Зураг боловсруулалт</h3>
              </div>
              <p class="scenario-desc">Skill / MCP-ээр зургийн хэрэгслийг жолоодно — засвар, үүсгэлт, танилтаа яриагаар.</p>
              <ul class="scenario-features">
                <li>Тайралт, усан тэмдэг арилгах, бөөнөөр хэмжээ/тайралт</li>
                <li>OCR текст гаргах (хятад-англи холилдсон)</li>
                <li>AI зураг үүсгэх / засах (нийтлэг загварууд)</li>
                <li>Зургийн утга ойлгох ба тайлбар үүсгэх</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Засвар</span>
                <span class="scenario-tag">OCR</span>
                <span class="scenario-tag">Үүсгэлт</span>
              </div>
            </div>

            <div class="scenario-card scenario-memory">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="brain" %}</span>
                <h3>Санах ой + мэдлэгийн сан</h3>
              </div>
              <p class="scenario-desc">Урт хугацааны санах ой бол дотоод тархи; мэдлэгийн сан бол гадаад тархи. Сесс дамнан дуртай зүйлийг санана; баримт оруулж мэргэжлийн мэдлэг өгнө.</p>
              <ul class="scenario-features">
                <li>BM25 + векторын хосолсон утгын хайлт</li>
                <li>Эббингаузын мартах муруй, автоматаар арчигдана</li>
                <li>Ямар ч формат: PDF / Word / вэб хуудас</li>
                <li>Өнгөрсөн яриаг сесс дамнан бүтэн текстаар хайх</li>
                <li>Баримт доторх зургийг OCR эсвэл харааны тайлбарын дараа индексэлнэ</li>
              </ul>
              <div class="scenario-tags">
                <span class="scenario-tag">Урт хугацааны санах ой</span>
                <span class="scenario-tag">Мэдлэгийн граф</span>
              </div>
            </div>
          </div>

          <div class="panel-cta">
            <a href="https://github.com/RapidAI/MaClaw/releases/latest" class="btn-primary" target="_blank">Одоо татах</a>
            <a href="#workflows" class="btn-secondary">Ажлын урсгалын загвар үзэх</a>
          </div>
        </div>

        <!-- Digital Employee -->
        <div id="tab-digital-employee" class="companion-panel" role="tabpanel" hidden>
          <h3 class="panel-headline">Тоон ажилтан — цалингүй 7×24 ажиллах хүч</h3>
          <p class="panel-lead">Тоон ажилтан бол MaClaw-ийн байгууллагад зориулсан шинэ ажиллах хэлбэр: одоогийн ажилтны тоон дүр, физик ажлын байргүй үүлэн виртуал ажилтан. Хамтдаа цалин нэмэхгүйгээр үр ашиг ба үйлчилгээний хамралтыг өсгөнө.</p>
          <p class="panel-lead">Тоон ажилтан бүр түрээслэгчийн мэдлэгийн санг хуваалцдаг, үүргээр хязгаарлагдсан MaClawSrv жишээ. WeChat, Feishu, QQ, Telegram эсвэл Lansenger холбож хамт олон шиг харагдуулна. Админ онлайн төлөв, даалгаврын түүх, анхааруулгыг хардаг. Хүрээнээс гарсан ажлыг хүнд шилжүүлж, тэр шилжүүлгийг хадгална.</p>

          <!-- Digital Avatars -->
          <div class="scenario-banner">
            <span class="scenario-label">Бодит ажилтны тоон дүр</span>
            <h4 class="scenario-headline">Ажилтан бүрт ээлжит ажлыг нь хийх хувийн AI ихэр өгнө</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="coffee" %}</span>
                <h3>Өдөр тутмын ажлын автоматжуулалт</h3>
              </div>
              <p>Имэйл ялгах ба хариуны санал, хурлын тэмдэглэл, хуваарь, зардлын тайлан болон давтагдах ажлыг автоматаар хийж, ажилтныг өндөр үнэ цэнэтэй ажилд чөлөөлнө.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Имэйл боловсруулалт</span>
                <span class="scenario-tag">Хуваарийн удирдлага</span>
                <span class="scenario-tag">Зардлын автоматжуулалт</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="message" %}</span>
                <h3>Мэдээллийн зууч</h3>
              </div>
              <p>Тоон дүр ажилтны мэргэжлийн мэдлэгийг үргэлжлүүлэн сурч, нийтлэг асуулт, бодлого, журмын тайлбарыг түүний өмнөөс хариулна — зөвхөн хүний шийдвэр шаардсан нарийн асуудлыг дамжуулна.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Ухаалаг асуулт хариулт</span>
                <span class="scenario-tag">Бодлого хайх</span>
                <span class="scenario-tag">7×24 онлайн</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="file-pen" %}</span>
                <h3>Баримт ба тайлан үүсгэх</h3>
              </div>
              <p>Долоо хоног, сарын тайлан, төслийн явц, графиктай шинжилгээний баримтыг автоматаар гаргана. Гэрээ, саналын ноорог бичиж, баримт бүтээх хугацааг эрс багасгана.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">7 хоног/сарын тайлан</span>
                <span class="scenario-tag">Өгөгдлийн шинжилгээ</span>
                <span class="scenario-tag">Баримтын ноорог</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="link" %}</span>
                <h3>Систем дамнасан даалгавар</h3>
              </div>
              <p>OA, ERP, CRM болон бусад системийг холбоно. Нэг байгалийн хэлний команд олон алхамт үйлдлийг эхлүүлнэ — «Өнгөрсөн долоо хоногийн үнийн саналыг Жанг руу батлуулахаар явуул» — програм хооронд үсрэхгүй.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">OA/ERP/CRM</span>
                <span class="scenario-tag">Нэг командын үйлдэл</span>
                <span class="scenario-tag">Байгалийн хэл</span>
              </div>
            </div>
          </div>

          <!-- Cloud Virtual Employees -->
          <div class="scenario-banner" style="margin-top: 40px;">
            <span class="scenario-label">Үүлэн виртуал ажилтан</span>
            <h4 class="scenario-headline">Виртуал ажилтан шууд үүрэгт — физик ширээ хэрэггүй</h4>
          </div>

          <div class="scenario-grid">
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="building" %}</span>
                <h3>Виртуал хүлээн авагч ба хэрэглэгчийн үйлчилгээ</h3>
              </div>
              <p>7×24 зочин хүлээн авах, хэрэглэгчийн дэмжлэг, бүтээгдэхүүний танилцуулга олон хэл, олон сувгаар. Суурь үйлчилгээний ажлыг илүү хурдан, нэг стандарт, сургалтын зардалгүйгээр орлоно.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Өдөр шөнөгүй</span>
                <span class="scenario-tag">Олон хэл</span>
                <span class="scenario-tag">Сургалтын зардалгүй</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="check" %}</span>
                <h3>Процессын баталгааны туслах</h3>
              </div>
              <p>Стандарт урсгалыг (чөлөө, худалдан авалт, нөхөн төлбөр, гэрээ) секундэд автоматаар батална; онцгой тохиолдлыг хүнд дамжуулна. Баталгаажуулалтыг цагаас секунд болгоно.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Ухаалаг баталгаа</span>
                <span class="scenario-tag">Онцгой тохиолдлыг дээшлүүлэх</span>
                <span class="scenario-tag">Секундын чиглүүлэлт</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="chart" %}</span>
                <h3>Өгөгдөл оруулах ба шалгах</h3>
              </div>
              <p>Имэйл, PDF, зураг, вэб хуудсаас бүтэцтэй өгөгдөл гаргаж оруулж, харьцуулж, шалгана — гараар оруулах алдааг арилгаж, өгөгдөл оруулагчийг илүү үнэ цэнэтэй ажилд чөлөөлнө.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Олон эх сурвалжаас гаргах</span>
                <span class="scenario-tag">Алдаагүй</span>
                <span class="scenario-tag">Автомат шалгалт</span>
              </div>
            </div>
            <div class="scenario-card scenario-office">
              <div class="scenario-head">
                <span class="scenario-icon">{% include icon.html name="library" %}</span>
                <h3>Мэдлэгийн сангийн эрхлэгч</h3>
              </div>
              <p>Компанийн баримт, гарын авлага, бүтээгдэхүүний тодорхойлолтыг үргэлжлүүлэн авна. Мэдлэгийн санг шинэчилж, хуучирсан агуулгыг тэмдэглэж, засвар санал болгоно.</p>
              <div class="scenario-tags">
                <span class="scenario-tag">Тасралтгүй суралцалт</span>
                <span class="scenario-tag">Автомат шинэчлэл</span>
                <span class="scenario-tag">Мэдлэгийн хөрөнгө</span>
              </div>
            </div>
          </div>

          <div class="panel-cta">
            <a href="https://github.com/RapidAI/MaClaw/releases/latest" class="btn-primary" target="_blank">Одоо татах</a>
            <a href="#capability-tiers" class="btn-secondary">Чадварын түвшний тухай</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Workflow Templates -->
<section class="workflow-section section" id="workflows">
  <div class="container">
    <h2 class="section-title">Бэлэн ажлын урсгалууд</h2>
    <p class="section-subtitle">38 бүтэцтэй ажлын урсгал. Доорх нь товчлол; эрдмийн бичлэг ба хяналт «Салбарын шийдэл: судалгаа» хэсэгт</p>
    <div class="workflow-grid">
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="file-pen" %}</div>
        <h3>Тендерийн хариу</h3>
        <p>Тендерийн баримт задлах, мэргэшлийн хариу, техникийн санал, баримт бүрдүүлэлт — эхнээс нь дуустал</p>
        <span class="workflow-tag">Байгууллага</span>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="scroll" %}</div>
        <h3>Гэрээ хянах</h3>
        <p>Заалт бүрийн эрсдэл, нийцлийн шалгалт, бүх төрлийн гэрээнд засварын санал</p>
        <span class="workflow-tag">Байгууллага</span>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="search" %}</div>
        <h3>Нягтлан шалгалт</h3>
        <p>Бизнес, санхүү, хууль, техникийн олон өнцгийн нягтлан шалгалт, бүрэн тайлантай</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="chart" %}</div>
        <h3>Нийцлийн аудит</h3>
        <p>Журмын нийцлийн үнэлгээ, эрсдэлийн зэрэг, залруулах төлөвлөгөө</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="file" %}</div>
        <h3>Патентийн шинжилгээ</h3>
        <p>Өмнөх техник хайх, зөрчлийн эрсдэл, патентийн стратегийн санал</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="coins" %}</div>
        <h3>Бизнес төлөвлөгөө</h3>
        <p>Зах зээлийн шинжилгээ, санхүүгийн төсөөлөл, стратегийн баримт</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="target" %}</div>
        <h3>Өрсөлдөгчийн шинжилгээ</h3>
        <p>Зах зээлийн зураглал, өрсөлдөгчийн дүр, стратегийн байрлал</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="lightbulb" %}</div>
        <h3>Инновацын төлөвлөгөө</h3>
        <p>Технологийн хандлага, инновацын боломж, R&D төлөвлөгөө</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="calendar" %}</div>
        <h3>Арга хэмжээ төлөвлөх</h3>
        <p>Санаанаас гүйцэтгэлийн жагсаалт хүртэлх арга хэмжээний ажлын урсгал</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="laptop" %}</div>
        <h3>Төслийн санал</h3>
        <p>Хүрээ тодорхойлох, нөөц төлөвлөх, хугацаа гаргах</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="library" %}</div>
        <h3>Судалгааны тайлан</h3>
        <p>Ном зүйн тойм, өгөгдөл нэгтгэх, эрдмийн бичлэг</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="palette" %}</div>
        <h3>Илтгэлийн дизайн</h3>
        <p>Слайдын бүтэц, агуулгын зохион байгуулалт, харааны дизайны чиглэл</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="library" %}</div>
        <h3>Ном зүйн тойм</h3>
        <p>Сэдэв, хайлтын стратеги, шүүлт, шинжилгээ, таны батлах нэгтгэл</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="pen" %}</div>
        <h3>Өгүүлэл бичих</h3>
        <p>Бүтэц, ном зүй, ноорог, зураг, найруулга — баталгаажсан үе шамаар</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="flask" %}</div>
        <h3>Туршилтын загвар</h3>
        <p>Судалгааны асуулт, таамаглал, аргын харьцуулалт, туршилтын төлөвлөгөө</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="refresh" %}</div>
        <h3>Өгүүлэл давтан хийх</h3>
        <p>Өгүүллийг уншиж, код ба өгөгдлийг олж, суурь туршилтыг давтан хийж, тайлан бичнэ</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="card" %}</div>
        <h3>Санхүүжилтийн өргөдөл</h3>
        <p>Таны нэрлэсэн санд зориулсан судалгааны суурь, төлөвлөгөө, өргөдөл</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="landmark" %}</div>
        <h3>Эрдмийн өргөдөл</h3>
        <p>Changjiang Scholar болон NSFC-ийн Онцгой залуу, Шилдэг залуу, Залуу, Ерөнхий, Түлхүүр</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="search" %}</div>
        <h3>Эрдмийн хяналт</h3>
        <p>Харгалзах хяналтын загвар: бүрэн бүтэн байдал, амжилт, төлөвлөгөө, бичлэгийн чанар, тайлан</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="scroll" %}</div>
        <h3>Патент мэдүүлэх</h3>
        <p>Хятадын патент ба АНУ-ын USPTO патентын өргөдлийн ажлын урсгал</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="graduation" %}</div>
        <h3>Гаокао төлөвлөлт</h3>
        <p>Оноо, сонирхол, хязгаараас их сургуулийн өргөдлийн лавлагаа</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="laptop" %}</div>
        <h3>Програмчлалын төсөл</h3>
        <p>MaClaw-ийн өөрийн зам: шаардлага, загвар, даалгавар, хэрэгжүүлэлт, хүлээн авалт</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="wrench" %}</div>
        <h3>Арчилгаа</h3>
        <p>Нөлөөллийн шинжилгээ, дахин бүтэц, баталгаажуулалт — эсвэл хяналттай ашиглалтын өөрчлөлт</p>
      </div>
      <div class="workflow-card">
        <div class="workflow-icon">{% include icon.html name="check" %}</div>
        <h3>Тендерийн баримт шалгах</h3>
        <p>Бэлэн тендерийн баримтыг шаардлагатай нь тулгаж, засварын тайлан гаргана</p>
      </div>
    </div>
  </div>
</section>

<!-- Core Technology (Developer-oriented) -->
<section class="developer-section section" id="technology">
  <div class="container">
    <h2 class="section-title">Үндсэн технологи</h2>
    <p class="section-subtitle">Агентыг санах, хайх, зөв гүйцэтгэхэд тусалдаг хөдөлгүүрүүд</p>
    <div class="developer-grid">
      <div class="developer-card">
        <h3>Санах ойн архитектур</h3>
        <p>8 ангиллын санах ой, утгын/үйл явдлын давхарга, цагийн шатлал, хамгаалагдсан бичлэг</p>
      </div>
      <div class="developer-card">
        <h3>Хосолсон хайлт</h3>
        <p>BM25 түлхүүр үг + векторын төстэй байдал, SIMD-ээр хурдасгасан косинус</p>
      </div>
      <div class="developer-card">
        <h3>Мэдлэгийн граф</h3>
        <p>Хоёр чиглэлт жинтэй ирмэг, BFS тэлэлт, олон төрлийн харилцаа</p>
      </div>
      <div class="developer-card">
        <h3>Мартах муруй</h3>
        <p>Эббингаузын бууралт, тохируулгатай хагас задрал ба унтаа босго</p>
      </div>
      <div class="developer-card">
        <h3>Swarm зохицуулагч</h3>
        <p>Даалгавар хуваах, зөрчил илрүүлэх, автомат нэгтгэл, эргэх холбооны зохицуулалт</p>
      </div>
      <div class="developer-card">
        <h3>MCP холболт</h3>
        <p>Дотоод stdio ба алсын HTTP MCP сервер, автомат илрүүлэлт ба эрүүл мэндийн хяналт</p>
      </div>
      <div class="developer-card">
        <h3>Хэрэгслийн чиглүүлэлт</h3>
        <p>40+ хэрэгслийг хосолсон хайлтаар тааруулна; нөхцөлт идэвхжүүлэлт ба аажмаар нээх</p>
      </div>
      <div class="developer-card">
        <h3>Ажлын урсгалын хөдөлгүүр</h3>
        <p>Үе шаттай гүйцэтгэл, хэрэгслийн бодлого, давхар баталгаа, хадгалалт</p>
      </div>
      <div class="developer-card">
        <h3>Шинжээчийн сесс</h3>
        <p>Өгүүлэл найруулах, эрдмийн орчуулга, LaTeX диплом бичих, PPT бүтээгч, чадварын түвшинтэй</p>
      </div>
      <div class="developer-card">
        <h3>Өөрийгөө хувиргалт</h3>
        <p>Ур чадвар дутуу үед SkillHub хайлт, алдааны дараа өөрийгөө засах, амжилттай гүйлгээг хадгалах санал</p>
      </div>
      <div class="developer-card">
        <h3>Дуу хоолой</h3>
        <p>Дотоод SenseVoice хөрвүүлэлт, яригчийн тэмдэг, хурлын тэмдэглэлийн ноорог, Kokoro яриа</p>
      </div>
      <div class="developer-card">
        <h3>Steering дүрэм</h3>
        <p>Хэрэглэгч эсвэл төслийн хүрээний Markdown дүрэм, засвар хийснээс хойш 30 секундэд дахин үйлчилнэ</p>
      </div>
      <div class="developer-card">
        <h3>Computer Use</h3>
        <p>Хүртээмжийн мод ба PP-OCR ажиглалт, товшилт ба бичилт, дахин ашиглах playbook</p>
      </div>
      <div class="developer-card">
        <h3>Урт хугацааны зорилго</h3>
        <p>Зорилго төсвөө баримтлан дуусах эсвэл бүтэлгүйтэх хүртэл үргэлжилнэ, зөвхөн та хүссэн үед</p>
      </div>
      <div class="developer-card">
        <h3>Файл хамтрагч</h3>
        <p>Локал файл эсвэл arXiv PDF-ээ зөвхөн тэр файлыг хэлэлцэх чатын хажууд нээж, Hub-аар хуваалцана</p>
      </div>
      <div class="developer-card">
        <h3>Ширээний тэжээвэр ба төхөөрөмж</h3>
        <p>Эхлээд текстээр ажиллах ширээний тэжээвэр, сонголттой сэрээх үг, локал төхөөрөмжийн гарц ба ESP32-S3-д зориулсан ClawMate</p>
      </div>
    </div>
  </div>
</section>

<!-- 4-Tier Capability System -->
<section class="capability-section section" id="capability-tiers">
  <div class="container">
    <h2 class="section-title">Засаглал: 4 түвшний чадварын систем</h2>
    <p class="section-subtitle">Байгууллага өөрийн баталсан чадварыг түрүүлнэ; гаднын эх сурвалж бодлогоор орно</p>

    <div class="capability-pyramid">
      <div class="capability-tier tier-1">
        <div class="tier-rank">Түвшин 1</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="building" %}</span>
            <div>
              <h3 class="tier-name">Хувийн чадварын зах</h3>
              <p class="tier-sub">Байгууллагын Hub зах</p>
            </div>
          </div>
          <p class="tier-desc">Админы хянасан, байгууллага бүтээсэн Skill/MCP сан. Ажилтны MaClaw эдгээрийг анхдагчаар түрүүлж дуудна; төлбөртэй лиценз төвлөрч, байгууллагын хилээс гарахгүй.</p>
          <div class="tier-tags">
            <span class="tier-tag">Өөрөө удирдах</span>
            <span class="tier-tag">Баталгаагаар нэвтрэх</span>
            <span class="tier-tag">Хамгийн түрүүнд</span>
            <span class="tier-tag">Төвлөрсөн лиценз</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-2">
        <div class="tier-rank">Түвшин 2</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="cloud" %}</span>
            <div>
              <h3 class="tier-name">Нээлттэй чадварын зах</h3>
              <p class="tier-sub">HubCenter зах</p>
            </div>
          </div>
          <p class="tier-desc">HubCenter-ийн нээлттэй зах, албан ёсны SkillHub ур чадвар ба худалдааны түншүүдтэй. Үнэгүй Skill шууд сууна; төлбөртэй Skill ба MCP байгууллагын худалдан авалтаар орно. Админ хувийн зах руу бөөнөөр оруулж болно.</p>
          <div class="tier-tags">
            <span class="tier-tag">Албан ёсны</span>
            <span class="tier-tag">Худалдааны</span>
            <span class="tier-tag">Худалдан авах / захиалах</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-3">
        <div class="tier-rank">Түвшин 3</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="globe" %}</span>
            <div>
              <h3 class="tier-name">ClawHub</h3>
              <p class="tier-sub">Нийгэмлэгийн чадвар</p>
            </div>
          </div>
          <p class="tier-desc">Нийгэмлэгийн нээлттэй чадварын эх. Үнэгүй Skill-ийг бага саадтай туршина; баталгаажсан нь байгууллагын хувийн зах руу хөрөнгө болж орно.</p>
          <div class="tier-tags">
            <span class="tier-tag">Нийгэмлэг</span>
            <span class="tier-tag">Үнэгүй туршилт</span>
            <span class="tier-tag">Туршаад дараа нь авах</span>
          </div>
        </div>
      </div>

      <div class="capability-tier tier-4">
        <div class="tier-rank">Түвшин 4</div>
        <div class="tier-body">
          <div class="tier-head">
            <span class="tier-icon">{% include icon.html name="git-branch" %}</span>
            <div>
              <h3 class="tier-name">GitHub</h3>
              <p class="tier-sub">Нээлттэй эхийн экосистем</p>
            </div>
          </div>
          <p class="tier-desc">GitHub репозиторын Skill/MCP хамгийн өргөн хүрээ өгнө. Админ зөвшөөрөгдсөн эх сурвалжийг цагаан жагсаалтаар хянана.</p>
          <div class="tier-tags">
            <span class="tier-tag">Нээлттэй эх</span>
            <span class="tier-tag">Хамгийн өргөн</span>
            <span class="tier-tag">Цагаан жагсаалт</span>
          </div>
        </div>
      </div>
    </div>

    <div class="capability-routing">
      <h3 class="routing-title">{% include icon.html name="search" %} Байгууллагын горимын ухаалаг чиглүүлэлт</h3>
      <p>MaClaw байгууллагын горимд байхад чадвар хайх дараалал: <strong>Хувийн зах → Нээлттэй зах → ClawHub → GitHub</strong>. Байгууллагын Hub-д нийтлэгдсэн чадвар үргэлж түрүүлнэ; гаднын эхийг хайх, турших, оруулах эсэхийг байгууллагын бодлого шийднэ.</p>
      <ul class="routing-rules">
        <li><strong>Үнэгүй чадвар</strong>: «туршаад дараа нь авах» гэж тохируулж болно — баталгаажсан чадвар байгууллагын зах руу автоматаар архивлагдана.</li>
        <li><strong>Төлбөртэй чадвар</strong>: «эхлээд баталж худалдаж аваад, дараа нь нээх» ёстой — лиценз бүхэлдээ байгууллагын Hub-д үлдэнэ.</li>
        <li><strong>MCP үйлчилгээ</strong>: нууц дутуу бол төлөв «тохиргоо хэрэгтэй» гэж харуулж, үндсэн урсгалыг хаахгүй.</li>
      </ul>
    </div>
  </div>
</section>

<!-- Enterprise Capability Build Process -->
<section class="buildflow-section section" id="governance">
  <div class="container">
    <h2 class="section-title">Засаглал: чадвар бүтээх процесс</h2>
    <p class="section-subtitle">Гаднын чадварыг байгууллагын хөрөнгө болгох дөрвөн алхам</p>

    <div class="buildflow-steps">
      <div class="buildflow-step">
        <div class="bf-num">01</div>
        <div class="bf-icon">{% include icon.html name="search" %}</div>
        <h3>Олох</h3>
        <p>Админ нээлттэй зах, ClawHub, GitHub-аас тохирох Skill/MCP хайна — эсвэл ажилтан оруулах хүсэлт гаргана.</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">02</div>
        <div class="bf-icon">{% include icon.html name="check" %}</div>
        <h3>Батлах / худалдан авах</h3>
        <p>Үнэгүй чадвар туршилт эсвэл баталгааны бодлогоор; төлбөртэй нь худалдан авалтаар — лицензийг байгууллагын Hub төвлөрүүлж барина.</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">03</div>
        <div class="bf-icon">{% include icon.html name="package" %}</div>
        <h3>Оруулах ба нийтлэх</h3>
        <p>Батлагдсан чадвар хувилбар, зөвшөөрлийн жагсаалт, эх сурвалжийн мета өгөгдөлтэйгээр хувийн зах руу орно.</p>
      </div>
      <div class="bf-arrow">&rarr;</div>
      <div class="buildflow-step">
        <div class="bf-num">04</div>
        <div class="bf-icon">{% include icon.html name="send" %}</div>
        <h3>Түгээх ба суулгах</h3>
        <p>Хэлтэс/үүрэг/төслөөр ажилтны MaClaw руу түгээнэ — албадан суулгах эсвэл зөвлөх, алдвал автоматаар дахин оролдоно.</p>
      </div>
    </div>

    <div class="buildflow-note">
      <strong>Хоёр замын бодлого:</strong>
      <span class="track-item"><span class="track-tag track-free">Үнэгүй</span> Туршаад дараа нь авах — баталгаажсан чадвар байгууллагын зах руу автоматаар архивлагдана</span>
      <span class="track-item"><span class="track-tag track-paid">Төлбөртэй</span> Батлаад дараа нь ашиглах — лиценз төвлөрсөн, дуудлага хяналттай, байгууллагын хилээс гарахгүй</span>
    </div>
  </div>
</section>

<!-- Research assistance -->
<section class="education-section section" id="research">
  <div class="container">
    <h2 class="section-title">Салбарын шийдэл: судалгааны туслалцаа</h2>
    <p class="section-subtitle">Чиглэл, өгүүлэл, магистр ба докторын дипломын ажил — бичих, бүтэц, хянан магадлагаа, бүлгээр унших, алсын сэтгэгдэл — MaClaw-д бэлэн байгаа ажлын урсгал ба шинжээч дээр.</p>
    <div class="scenario-banner">
      <span class="scenario-label">Боловсрол</span>
      <h3 class="scenario-headline">MaClaw таны хажууд аль хэдийн хийж чаддаг найман судалгааны ажил</h3>
    </div>
    <div class="scenario-grid">
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="compass" %}</span>
          <h3>Судалгааны чиглэл тодорхойлох</h3>
        </div>
        <p class="scenario-desc">Ном зүйн тоймоос эхэлнэ: сэдвийг зааглаж, хайлтыг тохируулж, өгүүллүүдийг шүүж, хоосон зайг нэгтгэнэ. Санхүүжилт ба авьяастны ажлын урсгал тэр зайг судалгааны төлөвлөгөө болгоно — гол асуулт, боломж, хамгаалж чадах чиглэл.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Ном зүйн тойм</span>
          <span class="scenario-tag">Санхүүжилтийн өргөдөл</span>
          <span class="scenario-tag">NSFC төлөвлөгөө</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="pen" %}</span>
          <h3>Эрдэм шинжилгээний өгүүлэл бичих</h3>
        </div>
        <p class="scenario-desc">Өгүүлэл бичих ажлын урсгал таны баталгаажуулсан үе шатаар явна: бүтэц, ном зүй, ноорог, зураг, хялбар найруулга. Өгүүлэл найруулах ба эрдмийн орчуулгын шинжээч нэр томьёог тогтвортой байлгана. LaTeX шинжээч таны .tex загвар луу бичиж, эмхэтгэн урьдчилан харахыг заана.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Өгүүлэл бичих</span>
          <span class="scenario-tag">Найруулга</span>
          <span class="scenario-tag">Орчуулга</span>
          <span class="scenario-tag">LaTeX</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="ruler" %}</span>
          <h3>Дипломын ажлын бүтэц цэгцлэх</h3>
        </div>
        <p class="scenario-desc">Өгүүлэл бичих ажлын бүтцийн үе шат эх бичвэрийг эцсийнх гэж үзэхээс өмнө бүлгийн хүрээг түгжинэ. LaTeX шинжээч дипломын загварын үндсэн файл ба оруулсан бүлгүүдийг уншаад тэр бүтцийг хэвээр үлдээнэ.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Бүтцийн үе</span>
          <span class="scenario-tag">Дипломын загвар</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="graduation" %}</span>
          <h3>Магистр, докторын дипломын ажил бичих</h3>
        </div>
        <p class="scenario-desc">Таны аль хэдийн ашигладаг дипломын загвар дээр бичнэ. LaTeX шинжээч .tex файлыг бүлэг бүлгээр нь байранд нь бөглөнө. Өгүүлэл бичих ажлын урсгал таны баталгаажуулах хэсгүүдийн нооргийг гаргана.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">LaTeX диплом</span>
          <span class="scenario-tag">Бүлгийн ноорог</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="search" %}</span>
          <h3>Эрдэм шинжилгээний өгүүлэл хянан магадлах</h3>
        </div>
        <p class="scenario-desc">Өгүүлэл найруулах шинжээч нэхэмжлэлийг өөрчлөхгүйгээр эрдмийн хэлийг хянаж, засвар бүрт тэмдэглэл үлдээнэ. PDF-ээ файл хамтрагч дээр нээгээд тэмдэглэлээ файл дээр үлдээнэ. Changjiang Scholar болон NSFC-ийн хяналтын ажлын урсгал (Онцгой залуу, Шилдэг залуу, Залуу, Ерөнхий, Түлхүүр) бүрэн бүтэн байдал, амжилт, судалгааны төлөвлөгөө, бичлэгийн чанарыг үнэлээд нэгдсэн тайлан бичнэ.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Найруулгын хяналт</span>
          <span class="scenario-tag">Хамтрагчийн тэмдэглэл</span>
          <span class="scenario-tag">Өргөдлийн хяналт</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="clipboard" %}</span>
          <h3>Магистр, докторын ажлыг хянан магадлах</h3>
        </div>
        <p class="scenario-desc">Дипломын ажлыг файл хамтрагч руу ачаалж, тэмдэглэл тухайн файл дээр үлдэнэ. Найруулгын шинжээч хэл ба бүтцийг хэсэг хэсгээр уншина. Хуваалцсаны дараа хөтлөгч тэмдэглэл бүрийг зөвшөөрөх эсвэл үл хэрэгсэх бөгөөд дараа нь хариу бүлэгт бичигдэнэ.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Бүлгийн тэмдэглэл</span>
          <span class="scenario-tag">Хөтлөгчийн хяналт</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="library" %}</span>
          <h3>Өгүүлэл уншихад туслах, бүлгээр хуваалцах</h3>
        </div>
        <p class="scenario-desc">arXiv дугаар эсвэл холбоос наана. Файл хамтрагч PDF-ээ өөрийн таб руу татаж, чат зөвхөн тэр өгүүллийг хэлэлцэнэ. Ангийнхан эсвэл лабораторийн бүлэгтээ хуваалцана: асуулт тэмдэглэл болж, хөтлөгч зөвшөөрөх эсвэл үл хэрэгсэнэ, зөвшөөрсөн хариуг хуваалцалт харж буй хүн бүр уншина. Сонгосон хэсгийн дахин бичилт, уншлагын тэмдэглэл, өгүүллийн тайлбар таны машин дээр үлдэнэ.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">arXiv</span>
          <span class="scenario-tag">Файл хамтрагч</span>
          <span class="scenario-tag">Бүлгийн хуваалцалт</span>
        </div>
      </div>
      <div class="scenario-card scenario-research">
        <div class="scenario-head">
          <span class="scenario-icon">{% include icon.html name="globe" %}</span>
          <h3>Өгүүллийг алсаас хянан магадлах</h3>
        </div>
        <p class="scenario-desc">Хянагч зохиогчийн компьютер дээр суух албагүй. Хуваалцсан хамтрагч баримт Hub-аар явна: оролцогч өөрийн MaClaw дээрээс тэмдэглэл бичнэ, хөтлөгч зөвшөөрнө, хариу нь тухайн хуваалцалт дээр хадгалагдана. Hub-ын алсын сесс энэ хяналтыг ширээнээс хол үргэлжлүүлнэ.</p>
        <div class="scenario-tags">
          <span class="scenario-tag">Hub хуваалцалт</span>
          <span class="scenario-tag">Алсын сесс</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Start -->
<section class="quickstart-section section" id="get-started">
  <div class="container">
    <h2 class="section-title">Татах ба нэвтрүүлэх</h2>
    <div class="quickstart-steps">
      <div class="step-item">
        <span class="step-num">1</span>
        Татаж суулгах
      </div>
      <div class="step-item">
        <span class="step-num">2</span>
        Бүртгүүлээд, Pro эсвэл Simple горимыг сонго
      </div>
      <div class="step-item">
        <span class="step-num">3</span>
        LLM үйлчилгээ нийлүүлэгч холбох
      </div>
      <div class="step-item">
        <span class="step-num">4</span>
        Хүсвэл IM холбоод эхлэх
      </div>
    </div>
    <div class="hero-btns" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px; flex-wrap: wrap;">
      <a href="https://maclaw.top" class="btn-primary" target="_blank">Вэб сайтад зочлох</a>
      <a href="https://github.com/rapidai/maclaw" class="btn-secondary" target="_blank">GitHub дээр үзэх</a>
      <a href="mailto:znsoft@163.com" class="btn-secondary">Аж ахуйн нэгжийн лавлагаа</a>
    </div>
  </div>
</section>
