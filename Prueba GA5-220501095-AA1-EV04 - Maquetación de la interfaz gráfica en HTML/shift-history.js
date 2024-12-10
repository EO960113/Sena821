document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Turno de Apertura', start: '2024-12-05T08:00:00' },
        { title: 'Turno de Cierre', start: '2024-12-06T20:00:00' }
      ]
    });
    calendar.render();
  });
  