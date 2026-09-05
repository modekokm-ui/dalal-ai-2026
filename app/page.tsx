"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080b18",
      color: "white",
      padding: "30px",
      fontFamily: "Arial",
      direction: "rtl"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "auto"
      }}>
        <h2>DALAL <span style={{color:"#8d9aff"}}>AI</span></h2>
        <button>دخول</button>
      </header>

      <section style={{
        maxWidth: "850px",
        margin: "100px auto",
        textAlign: "center"
      }}>
        <p style={{color:"#9da7ff"}}>✦ AI VIDEO STUDIO</p>

        <h1 style={{fontSize:"55px", lineHeight:"1.2"}}>
          حوّل أفكارك إلى
          <br />
          <span style={{color:"#9d8cff"}}>فيديوهات مذهلة</span>
        </h1>

        <p style={{color:"#aaa",fontSize:"18px",lineHeight:"2"}}>
          منصة DALAL AI لصناعة المحتوى باستخدام الذكاء الاصطناعي.
        </p>

        <div style={{
          background:"#111525",
          padding:"20px",
          borderRadius:"20px",
          marginTop:"40px"
        }}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="اكتب فكرة الفيديو هنا..."
            style={{
              width:"100%",
              height:"150px",
              background:"#080b18",
              color:"white",
              border:"1px solid #333",
              borderRadius:"12px",
              padding:"15px",
              fontSize:"16px"
            }}
          />

          <button
            onClick={() => alert(prompt ? "تم استلام فكرتك ✨" : "اكتب فكرة أولاً")}
            style={{
              width:"100%",
              marginTop:"15px",
              padding:"16px",
              borderRadius:"12px",
              border:"none",
              background:"#716cff",
              color:"white",
              fontSize:"18px"
            }}
          >
            إنشاء الفيديو ✦
          </button>
        </div>
      </section>

      <footer style={{textAlign:"center",color:"#777"}}>
        DALAL AI © 2026
      </footer>
    </main>
  );
            }
