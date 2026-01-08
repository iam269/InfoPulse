import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const PrivacyConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("privacy-consent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacy-consent", "accepted");
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("privacy-consent", "declined");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Politica de Confidențialitate</DialogTitle>
          <DialogDescription>
            Acest website folosește cookie-uri pentru a îmbunătăți experiența utilizatorului.
            Prin continuarea navigării, sunteți de acord cu utilizarea cookie-urilor conform
            politicii noastre de confidențialitate.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={handleDecline}>
            Refuz
          </Button>
          <Button onClick={handleAccept}>
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};