import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Save, 
  Share, 
  Download, 
  Presentation,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Type,
  Image,
  Square
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: string;
}

export function PresentationEditor() {
  const [title, setTitle] = useState("Untitled Presentation");
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([
    { id: 1, title: "Slide 1", content: "Click to add title" },
    { id: 2, title: "Slide 2", content: "Click to add content" },
  ]);

  const addSlide = () => {
    const newSlide: Slide = {
      id: slides.length + 1,
      title: `Slide ${slides.length + 1}`,
      content: "Click to add content"
    };
    setSlides([...slides, newSlide]);
    setCurrentSlide(slides.length);
  };

  const deleteSlide = () => {
    if (slides.length > 1) {
      const newSlides = slides.filter((_, index) => index !== currentSlide);
      setSlides(newSlides);
      setCurrentSlide(Math.max(0, currentSlide - 1));
    }
  };

  const updateSlideContent = (field: "title" | "content", value: string) => {
    const newSlides = [...slides];
    newSlides[currentSlide][field] = value;
    setSlides(newSlides);
  };

  const handleSave = () => {
    console.log("Saving presentation:", { title, slides });
  };

  const handleShare = () => {
    console.log("Sharing presentation");
  };

  const handleDownload = () => {
    console.log("Downloading presentation");
  };

  return (
    <Layout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <Presentation className="h-6 w-6 text-primary" />
            <div>
              {isEditing ? (
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
                  className="text-lg font-semibold"
                  autoFocus
                />
              ) : (
                <h1 
                  className="text-lg font-semibold cursor-pointer hover:bg-muted px-2 py-1 rounded"
                  onClick={() => setIsEditing(true)}
                >
                  {title}
                </h1>
              )}
              <p className="text-sm text-muted-foreground">Last edited: Just now</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="default" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Slide Thumbnails */}
          <div className="w-64 border-r border-border bg-muted/30 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Slides</h3>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" onClick={addSlide}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={deleteSlide}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <Card 
                  key={slide.id}
                  className={`cursor-pointer transition-colors ${
                    currentSlide === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <CardContent className="p-3">
                    <div className="aspect-video bg-background rounded border mb-2 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">{index + 1}</span>
                    </div>
                    <p className="text-xs font-medium truncate">{slide.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Editor */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center space-x-2 p-4 border-b border-border">
              <Button variant="ghost" size="sm">
                <Type className="h-4 w-4 mr-2" />
                Text
              </Button>
              <Button variant="ghost" size="sm">
                <Image className="h-4 w-4 mr-2" />
                Image
              </Button>
              <Button variant="ghost" size="sm">
                <Square className="h-4 w-4 mr-2" />
                Shape
              </Button>
            </div>

            {/* Slide Canvas */}
            <div className="flex-1 p-8 bg-muted/20">
              <div className="max-w-4xl mx-auto">
                <Card className="aspect-video shadow-elevated">
                  <CardContent className="h-full p-8 flex flex-col justify-center">
                    <div className="text-center space-y-4">
                      <Input
                        value={slides[currentSlide]?.title || ""}
                        onChange={(e) => updateSlideContent("title", e.target.value)}
                        className="text-3xl font-bold text-center border-0 bg-transparent text-foreground placeholder:text-muted-foreground"
                        placeholder="Click to add title"
                      />
                      <textarea
                        value={slides[currentSlide]?.content || ""}
                        onChange={(e) => updateSlideContent("content", e.target.value)}
                        className="w-full h-32 text-lg text-center border-0 bg-transparent resize-none focus:outline-none text-foreground placeholder:text-muted-foreground"
                        placeholder="Click to add content"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Navigation */}
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} of {slides.length}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                    disabled={currentSlide === slides.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}