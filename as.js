function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Registro de Capacitación', 105, 20, null, null, 'center');

    // Table data
    doc.autoTable({
        head: [['ID CAPACITACIÓN', 'USER', 'NOMBRE', 'FECHA', 'SEDE EDUCATIVA', 'MUNICIPIO', 'HORA INICIAL', 'HORA FINAL', 'DURACIÓN', 'TEMAS', 'EVALUACIÓN']],
        body: [
            ['1', 'usuario1', 'Juan Pérez', '10/10/2024', 'Escuela Central', 'Yumbo', '08:00 AM', '12:00 PM', '4 horas', 'Seguridad Alimentaria', 'Excelente']
            // Puedes agregar más filas aquí
        ],
        startY: 30,
        theme: 'striped'
    });

    // Save the PDF
    doc.save('registro_capacitacion.pdf');
}
