'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, FileText } from 'lucide-react'

export default function PDFViewer({ documents }: { documents: { name: string; url: string }[] }) {
  const [selected, setSelected] = useState<{ name: string; url: string } | null>(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <div className="space-y-3">
        {documents.map((doc, i) => (
          <button
            key={i}
            onClick={() => setSelected(doc)}
            className="w-full flex items-center gap-3 p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow text-primary hover:text-secondary text-left"
          >
            <FileText className="w-5 h-5 text-secondary flex-shrink-0" />
            <span className="text-sm font-medium">{doc.name}</span>
          </button>
        ))}
      </div>

      {selected && createPortal(
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 border-b bg-white">
              <h3 className="text-sm font-semibold text-primary truncate">{selected.name}</h3>
              <button onClick={() => setSelected(null)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <iframe src={selected.url} className="w-full h-[calc(90vh-52px)]" title={selected.name} />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
