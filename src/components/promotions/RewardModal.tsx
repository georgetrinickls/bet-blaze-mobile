
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Check, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface RewardModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  reward: {
    title: string;
    rewardType: string;
    description: string;
  };
  reason: string;
}

export const RewardModal = ({ isOpen, onOpenChange, reward, reason }: RewardModalProps) => {
  const { toast } = useToast();

  const handleUseNow = () => {
    toast({
      title: "Reward Applied!",
      description: `Your ${reward.rewardType} has been activated.`,
    });
    onOpenChange(false);
  };

  const handleSaveForLater = () => {
    toast({
      title: "Reward Saved!",
      description: `Your ${reward.rewardType} will be available in your rewards section.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border-purple-500 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-2">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <Gift className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              Congratulations!
            </motion.div>
          </DialogTitle>
          <DialogDescription className="text-white/80 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              You've unlocked a special reward
            </motion.div>
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gray-800 p-6 rounded-lg text-center mb-4"
          >
            <div className="text-purple-500 font-bold mb-1">{reward.rewardType}</div>
            <div className="text-xl font-bold mb-3">{reward.title}</div>
            <p className="text-white/80 text-sm">{reward.description}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/70 text-sm text-center"
          >
            <p>Earned because: {reason}</p>
          </motion.div>
        </div>

        <DialogFooter className="flex gap-3 sm:gap-3">
          <Button
            variant="outline"
            className="flex-1 gap-2 border-purple-500 text-purple-500 hover:text-purple-400 hover:bg-gray-800"
            onClick={handleSaveForLater}
          >
            <Clock className="h-4 w-4" /> Save for Later
          </Button>
          <Button 
            className="flex-1 gap-2 bg-purple-500 hover:bg-purple-600"
            onClick={handleUseNow}
          >
            <Check className="h-4 w-4" /> Use Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
