# Quick-start Guide: Running Waves

Follow these steps to get the Waves application running on your local machine.

## Prerequisites
- Node.js (>= 20.0.0)
- npm or yarn

## Setup and Run

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start Firebase Emulators**:
   The app is configured to use local emulators for Authentication and Firestore. Start them in a separate terminal:
   ```bash
   npx firebase emulators:start
   ```
   > [!NOTE]
   > You can access the Firebase Emulator UI at [http://127.0.0.1:4000](http://127.0.0.1:4000).

3. **Start the Development Server**:
   In another terminal, start the Next.js development server:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Credentials
Since you are using emulators, you can use the test phone numbers if configured in `firebase.json` or create new ones via the Emulator UI.
- Default Test Phone: `+1 650-555-1234`
- Default Code: `123456`
