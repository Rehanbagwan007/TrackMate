import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  QrCode, 
  Monitor, 
  BarChart3, 
  CheckCircle,
  Building,
  Phone,
  Mail,
  Globe,
  Star,
  ArrowRight,
  Calendar,
  BookOpen,
  UserCheck
} from 'lucide-react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    instituteName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    studentsCount: '',
    facultyCount: '',
    departments: '',
    currentSystem: '',
    requirements: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Enterprise application:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const features = [
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Smart QR Attendance",
      description: "Automated attendance tracking with QR codes and real-time verification"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Collaboration",
      description: "Google Docs-like editors for documents, spreadsheets, and presentations"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Code Editor",
      description: "Built-in VS Code-like editor for programming assignments and projects"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Role-Based Access",
      description: "Hierarchical permissions for admins, HODs, faculty, and students"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights on attendance, performance, and engagement"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Assignment Management",
      description: "Create, distribute, and grade assignments with automated workflows"
    }
  ];

  const benefits = [
    "95% reduction in attendance time",
    "100% digital document management",
    "Real-time collaboration tools",
    "Automated grading system",
    "Mobile-first responsive design",
    "Enterprise-grade security"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Dean, MIT College",
      content: "EduSmart transformed our classroom management. Attendance tracking is now seamless and our faculty productivity increased by 40%.",
      rating: 5
    },
    {
      name: "Prof. Michael Chen",
      role: "HOD Computer Science, Stanford University",
      content: "The integrated code editor and assignment system revolutionized how we conduct programming courses. Students love the collaborative features.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal, Greenwood Institute",
      content: "Implementation was smooth and the support team was exceptional. Our teachers adapted quickly and student engagement improved significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">EduSmart</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</a>
            <Button variant="outline" size="sm">Login</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Trusted by 500+ Educational Institutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Smart Classroom Revolution
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your educational institution with AI-powered attendance tracking, 
            collaborative document editing, and comprehensive classroom management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your classroom efficiently and effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose EduSmart?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of educational institutions that have transformed their classroom experience
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-background/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Live Attendance</span>
                  </div>
                  <CardTitle>Class CS-101 - Data Structures</CardTitle>
                  <CardDescription>Monday, 10:00 AM - Room 204</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Present: 45/50 students</span>
                      <Badge variant="secondary">90%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      QR code scanned by 45 students in 2 minutes
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Educators Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about their experience with EduSmart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Application Form */}
      <section id="enterprise" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Apply for enterprise access and get a customized solution for your educational institution
            </p>
          </div>
          
          <Card className="bg-background/50 backdrop-blur border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Building className="h-6 w-6 mr-2 text-primary" />
                Enterprise Application
              </CardTitle>
              <CardDescription>
                Fill out this form and our team will contact you within 24 hours to discuss your requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="instituteName">Institute Name *</Label>
                    <Input
                      id="instituteName"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleInputChange}
                      placeholder="Enter your institute name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Full name of contact person"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contact@institute.edu"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Institute Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://www.institute.edu"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="studentsCount">Number of Students *</Label>
                    <select 
                      id="studentsCount"
                      name="studentsCount"
                      value={formData.studentsCount}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select range</option>
                      <option value="under-500">Under 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000-10000">5,000 - 10,000</option>
                      <option value="over-10000">Over 10,000</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="facultyCount">Number of Faculty *</Label>
                    <select 
                      id="facultyCount"
                      name="facultyCount"
                      value={formData.facultyCount}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select range</option>
                      <option value="under-50">Under 50</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-500">100 - 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="over-1000">Over 1,000</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="departments">Number of Departments</Label>
                    <Input
                      id="departments"
                      name="departments"
                      type="number"
                      value={formData.departments}
                      onChange={handleInputChange}
                      placeholder="e.g., 12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currentSystem">Current Management System</Label>
                  <Input
                    id="currentSystem"
                    name="currentSystem"
                    value={formData.currentSystem}
                    onChange={handleInputChange}
                    placeholder="e.g., Manual attendance, Google Classroom, Moodle, etc."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific needs, integrations required, timeline, etc."
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional information you'd like to share"
                    rows={3}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Submit Enterprise Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EduSmart</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transforming education through smart technology and innovative classroom management solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EduSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;