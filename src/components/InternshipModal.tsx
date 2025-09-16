import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InternshipModal = ({ isOpen, onClose }: InternshipModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: [] as string[],
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);

  const skillOptions = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Mobile Development",
    "UI/UX Design",
    "Database Management",
    "Cloud Services",
    "API Development",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.coverLetter) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.skills.length === 0) {
      toast({
        title: "Skills Required",
        description: "Please select at least one skill.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log form data (in real app, this would be sent to backend/Google Sheets)
      console.log("Internship Application Submitted:", {
        ...formData,
        resume: resume?.name || null,
        submittedAt: new Date().toISOString(),
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        skills: [],
        coverLetter: "",
      });
      setResume(null);
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Apply for Internship
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join our team and gain hands-on experience in cutting-edge technology projects.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className="mt-1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (234) 567-8900"
              className="mt-1"
              required
            />
          </div>

          {/* Resume Upload */}
          <div>
            <Label htmlFor="resume" className="text-sm font-medium">
              Resume Upload
            </Label>
            <div className="mt-1">
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent transition-colors"
              >
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {resume ? resume.name : "Click to upload your resume"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </div>
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Skills (Select all that apply) *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillOptions.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox
                    id={skill}
                    checked={formData.skills.includes(skill)}
                    onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                  />
                  <Label
                    htmlFor={skill}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter" className="text-sm font-medium">
              Cover Letter *
            </Label>
            <Textarea
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter", e.target.value)}
              placeholder="Tell us why you're interested in this internship and what you hope to learn..."
              className="mt-1 min-h-[120px]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary hover:opacity-90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Application
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipModal;