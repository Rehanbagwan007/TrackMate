import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Save, 
  Share, 
  Download, 
  FileSpreadsheet,
  Plus,
  Trash2
} from "lucide-react";

interface Cell {
  value: string;
  formula?: string;
}

const ROWS = 20;
const COLS = 10;

export function SpreadsheetEditor() {
  const [title, setTitle] = useState("Untitled Spreadsheet");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const [cells, setCells] = useState<Cell[][]>(() => 
    Array(ROWS).fill(null).map(() => Array(COLS).fill(null).map(() => ({ value: "" })))
  );

  const columnHeaders = Array.from({ length: COLS }, (_, i) => 
    String.fromCharCode(65 + i)
  );

  const handleCellChange = (row: number, col: number, value: string) => {
    const newCells = [...cells];
    newCells[row][col] = { value };
    setCells(newCells);
  };

  const handleSave = () => {
    console.log("Saving spreadsheet:", { title, cells });
  };

  const handleShare = () => {
    console.log("Sharing spreadsheet");
  };

  const handleDownload = () => {
    console.log("Downloading spreadsheet");
  };

  return (
    <Layout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <FileSpreadsheet className="h-6 w-6 text-primary" />
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

        {/* Toolbar */}
        <div className="flex items-center space-x-2 p-4 border-b border-border bg-muted/30">
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Insert Row
          </Button>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Insert Column
          </Button>
          <Button variant="ghost" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>

        {/* Spreadsheet */}
        <div className="flex-1 p-4 overflow-auto">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="w-12 h-8 border border-border bg-muted/50 text-xs text-center">
                        
                      </th>
                      {columnHeaders.map((header, colIndex) => (
                        <th 
                          key={colIndex}
                          className="min-w-[100px] h-8 border border-border bg-muted/50 text-xs text-center font-medium"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cells.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="w-12 h-8 border border-border bg-muted/50 text-xs text-center font-medium">
                          {rowIndex + 1}
                        </td>
                        {row.map((cell, colIndex) => (
                          <td 
                            key={colIndex}
                            className={`min-w-[100px] h-8 border border-border ${
                              selectedCell.row === rowIndex && selectedCell.col === colIndex
                                ? "bg-primary/10"
                                : "hover:bg-muted/30"
                            }`}
                            onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                          >
                            <Input
                              value={cell.value}
                              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                              className="border-0 h-8 px-2 bg-transparent focus:bg-background"
                              placeholder=""
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}