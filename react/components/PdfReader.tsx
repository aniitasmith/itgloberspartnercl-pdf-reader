import React, { useEffect, useState } from 'react'

type Props = {
  pdfURL: string,
  width: number,
  height: number
}

const PdfReader = ({pdfURL, width, height } : Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return(
    mounted && (
      <div className="flex justify-center items-center">
        <object
          data={pdfURL}
          type="application/pdf"
          width={width}
          height={height}
        >
          <iframe title="PDF" src={pdfURL} width={width} height={height}>
            <p> Este navegador no soporta PDF</p>
          </iframe>
        </object>
      </div>
    )
  )
}

export default PdfReader

