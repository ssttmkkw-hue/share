import { useState } from 'react'

const cards = [
  { icon: '🎨', title: '设计', text: '热爱简洁、优雅的界面，相信细节决定体验。' },
  { icon: '💻', title: '开发', text: '用 React 与现代前端工具，把想法变成可用的产品。' },
  { icon: '📚', title: '学习', text: '保持好奇，持续学习，记录并分享成长的每一步。' },
]

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <header className="hero">
        <div className="avatar">🌟</div>
        <h1>你好，欢迎来到我的个人页</h1>
        <p className="subtitle">记录想法 · 分享作品 · 享受创造</p>
      </header>

      <section className="cards">
        {cards.map((c) => (
          <article className="card" key={c.title}>
            <div className="card-icon">{c.icon}</div>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </article>
        ))}
      </section>

      <section className="counter">
        <p>
          你已经点击了 <strong>{count}</strong> 次
        </p>
        <div className="actions">
          <button className="btn" onClick={() => setCount(count + 1)}>
            点我 +1
          </button>
          <button className="btn ghost" onClick={() => setCount(0)}>
            重置
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} 我的个人页 · 用 Vite + React 构建</p>
        <p>本次修改由 ChatGPT Codex 完成 ✨</p>
      </footer>
    </main>
  )
}
