import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

@Component({
  selector: 'app-video-editor',
  standalone: true,
  imports: [    CommonModule,  
    FormsModule],
  templateUrl: './video-editor.component.html',
  styleUrl: './video-editor.component.css'
})
export class VideoEditorComponent implements  OnInit{

  ffmpeg: any;
  videoFile: File |  null = null;
  videoSrc: string | ArrayBuffer | null = null;
  startTime: number = 0;
  duration: number = 10;
  trimmedVideoSrc: string | null = null;
  isProcessing: boolean = false;

  constructor() {
    this.ffmpeg= createFFmpeg({log: true,
      corePath: '/Users/mac/AnaleeticsPlatform/ft_frontend/node_modules/@ffmpeg/core/dist/ffmpeg-core.js'
    });
  }
  async ngOnInit()
  {
    await this.ffmpeg.load();
  }
  onFileSelected(event: any) : void{
    const file = event.target.files[0];
    this.videoFile = file;

    const reader = new FileReader();
    reader.onload = () =>{
      this.videoSrc = reader.result;
    };
    reader.readAsDataURL(file);
  }
  async onTrim(){
    if(!this.videoFile) return ;
    this.isProcessing = true;
    const {name} = this.videoFile;
    this.ffmpeg.FS('writeFile', name, await fetchFile(this.videoFile));
    await this.ffmpeg.run(
      '-i',
      name,
      '-ss',
       `${this.startTime}`,
       '-t',
       `${this.duration}`,
       '-c',
       'copy',
       'output.mp4'
    );
  const data = this.ffmpeg.FS('readFile','output.mp4');
  const trimmeBlob = new Blob([data.buffer], {type:  'video/mp4'});
  this.trimmedVideoSrc = URL.createObjectURL(trimmeBlob);
  this.isProcessing = false;
  }
}
