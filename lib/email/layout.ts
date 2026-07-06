function renderEmailLayout(bodyHtml: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #0a0a0a; line-height: 1.6;">
      <p style="font-size: 14px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 24px;">
        ORXIO
      </p>
      ${bodyHtml}
    </div>
  `
}

export { renderEmailLayout }
