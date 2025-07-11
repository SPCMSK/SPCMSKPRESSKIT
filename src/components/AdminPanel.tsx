import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Save, LogOut, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useContent } from "@/contexts/ContentContext";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const { content, updateContent } = useContent();

  // Local state for editing
  const [heroData, setHeroData] = useState(content.heroData);
  const [bioData, setBioData] = useState(content.bioData);
  const [galleryPhotos, setGalleryPhotos] = useState(content.galleryPhotos);
  const [socialLinks, setSocialLinks] = useState(content.socialLinks);
  const [videos, setVideos] = useState(content.videos);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in real app, use proper auth
    if (loginData.email === "admin@spcmsk.com" && loginData.password === "spcmsk2024") {
      setIsAuthenticated(true);
      toast({
        title: "Login exitoso",
        description: "Bienvenido al panel de administración"
      });
    } else {
      toast({
        title: "Error de login",
        description: "Email o contraseña incorrectos",
        variant: "destructive"
      });
    }
  };

  const handleSave = () => {
    updateContent({
      heroData,
      bioData,
      galleryPhotos,
      socialLinks,
      videos
    });
    
    toast({
      title: "Guardado exitoso",
      description: "Los cambios han sido guardados correctamente"
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ email: "", password: "" });
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente"
    });
  };

  // Sync local state with context when component opens
  useEffect(() => {
    if (isOpen) {
      setHeroData(content.heroData);
      setBioData(content.bioData);
      setGalleryPhotos(content.galleryPhotos);
      setSocialLinks(content.socialLinks);
      setVideos(content.videos);
    }
  }, [isOpen, content]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Panel de Administración</CardTitle>
            <CardDescription>Edita todo el contenido del sitio web</CardDescription>
          </div>
          <div className="flex gap-2">
            {isAuthenticated && (
              <>
                <Button onClick={handleSave} size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Guardar
                </Button>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </>
            )}
            <Button onClick={onClose} variant="ghost" size="icon">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  placeholder="admin@spcmsk.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Credenciales: admin@spcmsk.com / spcmsk2024
              </p>
            </form>
          ) : (
            <Tabs defaultValue="hero" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="bio">Bio</TabsTrigger>
                <TabsTrigger value="gallery">Galería</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="social">Redes</TabsTrigger>
              </TabsList>

              <TabsContent value="hero" className="space-y-4">
                <h3 className="text-lg font-semibold">Editar Sección Hero</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Título Principal</Label>
                    <Input
                      id="hero-title"
                      value={heroData.title}
                      onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Subtítulo</Label>
                    <Input
                      id="hero-subtitle"
                      value={heroData.subtitle}
                      onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-desc1">Descripción 1</Label>
                    <Input
                      id="hero-desc1"
                      value={heroData.description1}
                      onChange={(e) => setHeroData({ ...heroData, description1: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-desc2">Descripción 2</Label>
                    <Input
                      id="hero-desc2"
                      value={heroData.description2}
                      onChange={(e) => setHeroData({ ...heroData, description2: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-bg">Imagen de Fondo (URL)</Label>
                    <Input
                      id="hero-bg"
                      value={heroData.backgroundImage}
                      onChange={(e) => setHeroData({ ...heroData, backgroundImage: e.target.value })}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bio" className="space-y-4">
                <h3 className="text-lg font-semibold">Editar Sección Bio</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio-title">Título</Label>
                    <Input
                      id="bio-title"
                      value={bioData.title}
                      onChange={(e) => setBioData({ ...bioData, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio-image">Imagen (URL)</Label>
                    <Input
                      id="bio-image"
                      value={bioData.image}
                      onChange={(e) => setBioData({ ...bioData, image: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio-p1">Párrafo 1</Label>
                    <Textarea
                      id="bio-p1"
                      value={bioData.paragraph1}
                      onChange={(e) => setBioData({ ...bioData, paragraph1: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio-p2">Párrafo 2</Label>
                    <Textarea
                      id="bio-p2"
                      value={bioData.paragraph2}
                      onChange={(e) => setBioData({ ...bioData, paragraph2: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio-p3">Párrafo 3</Label>
                    <Textarea
                      id="bio-p3"
                      value={bioData.paragraph3}
                      onChange={(e) => setBioData({ ...bioData, paragraph3: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio-p4">Párrafo 4</Label>
                    <Textarea
                      id="bio-p4"
                      value={bioData.paragraph4}
                      onChange={(e) => setBioData({ ...bioData, paragraph4: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-4">
                <h3 className="text-lg font-semibold">Editar Galería de Fotos</h3>
                <div className="space-y-4">
                  {galleryPhotos.map((photo, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex gap-4 items-center">
                          <img src={photo.src} alt={photo.alt} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1 space-y-2">
                            <Input
                              value={photo.src}
                              onChange={(e) => {
                                const newPhotos = [...galleryPhotos];
                                newPhotos[index].src = e.target.value;
                                setGalleryPhotos(newPhotos);
                              }}
                              placeholder="URL de la imagen"
                            />
                            <Input
                              value={photo.alt}
                              onChange={(e) => {
                                const newPhotos = [...galleryPhotos];
                                newPhotos[index].alt = e.target.value;
                                setGalleryPhotos(newPhotos);
                              }}
                              placeholder="Texto alternativo"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={photo.featured ? "default" : "secondary"}>
                              {photo.featured ? "Destacada" : "Normal"}
                            </Badge>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const newPhotos = [...galleryPhotos];
                                newPhotos[index].featured = !newPhotos[index].featured;
                                setGalleryPhotos(newPhotos);
                              }}
                            >
                              Toggle
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-4">
                <h3 className="text-lg font-semibold">Editar Videos de Presentaciones</h3>
                <div className="space-y-4">
                  {videos.map((video, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Título del Video</Label>
                              <Input
                                value={video.title}
                                onChange={(e) => {
                                  const newVideos = [...videos];
                                  newVideos[index].title = e.target.value;
                                  setVideos(newVideos);
                                }}
                                placeholder="Título del video"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>ID del Video de YouTube</Label>
                              <Input
                                value={video.id}
                                onChange={(e) => {
                                  const newVideos = [...videos];
                                  newVideos[index].id = e.target.value;
                                  newVideos[index].embedUrl = `https://www.youtube.com/embed/${e.target.value}`;
                                  setVideos(newVideos);
                                }}
                                placeholder="ID del video (ej: rQebU3T_oqU)"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Descripción</Label>
                            <Input
                              value={video.description || ""}
                              onChange={(e) => {
                                const newVideos = [...videos];
                                newVideos[index].description = e.target.value;
                                setVideos(newVideos);
                              }}
                              placeholder="Descripción del video"
                            />
                          </div>
                          <div className="flex justify-end">
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => {
                                const newVideos = videos.filter((_, i) => i !== index);
                                setVideos(newVideos);
                              }}
                            >
                              Eliminar Video
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={() => {
                      const newVideo = {
                        id: "",
                        title: "Nuevo Video",
                        embedUrl: "",
                        description: "Presentación en vivo • YouTube"
                      };
                      setVideos([...videos, newVideo]);
                    }}
                    className="w-full"
                  >
                    Agregar Nuevo Video
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="social" className="space-y-4">
                <h3 className="text-lg font-semibold">Editar Redes Sociales</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Plataforma</Label>
                            <Input
                              value={link.platform}
                              onChange={(e) => {
                                const newLinks = [...socialLinks];
                                newLinks[index].platform = e.target.value;
                                setSocialLinks(newLinks);
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>URL</Label>
                            <Input
                              value={link.url}
                              onChange={(e) => {
                                const newLinks = [...socialLinks];
                                newLinks[index].url = e.target.value;
                                setSocialLinks(newLinks);
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;