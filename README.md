# Bhandan Project

## Overview
Bandhan is an online e-health website for NRIs living outside India to track the health of their elderly parents.

## Current Website Pages
- `index.html`: Home/landing page with service navigation
- `nri-dashboard.html`: NRI health updates dashboard
- `elderly-emergency.html`: Elderly emergency/SOS support page
- `doctor-consultation.html`: Online doctor consultation form
- `medicine-shop.html`: Online medicine ordering page
- `medical-reports.html`: Medical report generation page

## Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/ritikasahay328/Bhandan-Project.git
   cd Bhandan-Project
   ```
2. Start the website server:
   ```bash
   python3 server.py
   ```
3. Open in browser:
   ```text
   http://localhost:4173
   ```

To use a custom port:

```bash
PORT=8000 python3 server.py
```

## Troubleshooting
If the browser shows "This site can't be reached":
- Make sure `python3 server.py` is still running.
- Check that you're opening the same port printed in the terminal.
- Try `http://127.0.0.1:4173`.
