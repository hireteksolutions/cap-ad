import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { AuthProvider } from "./lib/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Add from "./pages/add";
// import Fbpost from "./pages/fbpost";
// import Fbpost2 from "./pages/fbpost2";
// import Ad from "./pages/Ad";
// import Carouselfb from "./pages/carouselfb";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/add" replace />} /> */}
            <Route path="/add" element={<ProtectedRoute><Add /></ProtectedRoute>} />
            <Route path="/ad" element={<Add />} />
            {/* <Route path="/fbpost" element={<Fbpost />} />
            <Route path="/fbpost2" element={<Fbpost2 />} />
            <Route path="/carouselfb" element={<Carouselfb />} /> */}
            
            {/* <Route path="*" element={<Navigate to="/ad" replace />} /> */}

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
