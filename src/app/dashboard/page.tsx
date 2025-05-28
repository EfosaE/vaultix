"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cloud,
  Upload,
  Search,
  Filter,
  MoreVertical,
  FileText,
  ImageIcon,
  Video,
  Archive,
  Download,
  Share2,
  Trash2,
  Eye,
  Users,
  Settings,
  Bell,
  Plus,
  Folder,
  Grid3X3,
  List,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { UploadModal } from "@/components/upload-modal";

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const router = useRouter();

  const files = [
    {
      id: 1,
      name: "Q4 Financial Report.pdf",
      type: "pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      sharedWith: 5,
      icon: FileText,
      color: "text-red-500",
    },
    {
      id: 2,
      name: "Marketing Campaign Assets",
      type: "folder",
      size: "156 MB",
      modified: "1 day ago",
      sharedWith: 12,
      icon: Folder,
      color: "text-purple-500",
    },
    {
      id: 3,
      name: "Product Demo Video.mp4",
      type: "video",
      size: "45.2 MB",
      modified: "3 days ago",
      sharedWith: 8,
      icon: Video,
      color: "text-blue-500",
    },
    {
      id: 4,
      name: "Team Photo 2024.jpg",
      type: "image",
      size: "8.1 MB",
      modified: "1 week ago",
      sharedWith: 25,
      icon: ImageIcon,
      color: "text-green-500",
    },
    {
      id: 5,
      name: "Project Archive.zip",
      type: "archive",
      size: "128 MB",
      modified: "2 weeks ago",
      sharedWith: 3,
      icon: Archive,
      color: "text-orange-500",
    },
    {
      id: 6,
      name: "Client Presentation.pptx",
      type: "presentation",
      size: "12.8 MB",
      modified: "3 weeks ago",
      sharedWith: 7,
      icon: FileText,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Vaultix</span>
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50">
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                Shared
              </Button>
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-purple-900 hover:bg-purple-50">
                Recent
              </Button>
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-purple-900 hover:bg-purple-50">
                Trash
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:text-purple-900 hover:bg-purple-50">
              <Bell className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:text-purple-900 hover:bg-purple-50">
              <Settings className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-purple-50">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="bg-purple-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block text-gray-900">
                    John Doe
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/")}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Storage
              </CardTitle>
              <div className="text-2xl font-bold text-gray-900">2.4 TB</div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-600">68% of 3.5 TB used</div>
              <div className="w-full bg-purple-100 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                  style={{ width: "68%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Files
              </CardTitle>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-purple-600">+23 this week</div>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Shared Files
              </CardTitle>
              <div className="text-2xl font-bold text-gray-900">89</div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-purple-600">With 156 people</div>
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Team Members
              </CardTitle>
              <div className="text-2xl font-bold text-gray-900">24</div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-purple-600">
                Across 3 departments
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <UploadModal>
              <Button variant={"gradient"}>
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
            </UploadModal>
            <Button
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <Plus className="w-4 h-4 mr-2" />
              New Folder
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
              <Input
                placeholder="Search files..."
                className="pl-10 border-gray-200 focus:border-purple-400 w-64"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </Button>
            <div className="flex border border-purple-200 rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className={
                  viewMode === "grid"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "text-purple-600 hover:bg-purple-50"
                }
                onClick={() => setViewMode("grid")}>
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className={
                  viewMode === "list"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "text-purple-600 hover:bg-purple-50"
                }
                onClick={() => setViewMode("list")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Files Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {files.map((file) => (
              <Card
                key={file.id}
                className="border-purple-100 hover:shadow-lg transition-all duration-200 bg-white/50 backdrop-blur-sm group cursor-pointer w-full">
                <CardHeader>
                  <div className="flex justify-around">
                    <div className="w-10 h-10 mr-4 bg-purple-50 rounded-lg flex items-center justify-center">
                      <file.icon className={`w-5 h-5 ${file.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-600">{file.size}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-purple-600">
                    <span className="text-gray-600">{file.modified}</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{file.sharedWith}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-purple-100 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-purple-50 transition-colors group">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <file.icon className={`w-4 h-4 ${file.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-600">{file.modified}</p>
                    </div>
                    <div className="text-sm text-gray-600">{file.size}</div>
                    <div className="flex items-center gap-1 text-sm text-purple-600">
                      <Users className="w-3 h-3" />
                      <span>{file.sharedWith}</span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
