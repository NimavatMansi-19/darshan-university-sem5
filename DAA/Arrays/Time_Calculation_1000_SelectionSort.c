#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define N 1000 
int readFile(const char *filename,int arr[],int n){
    FILE *f=fopen(filename,"r");
    if(!f){
        printf("File not available");
        return 0;
    }
    for(int i=0;i<n;i++){
        fscanf(f,"%d",&arr[i]);
    }
    fclose(f);
    return 1;
}
void SelectionSort(int arr[],int n){
    int minind;
    for(int i=0;i<n-1;i++){
        minind=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[minind]){
                minind=j;
            }
        }
        if(minind!=i){
            int temp=arr[i];
            arr[i]=arr[minind];
            arr[minind]=temp;
        }
        
    }
   
}
void main(){
    clock_t start,end;
    double time_taken;
    int arr[N];
    if(readFile("Best_Case_1000.txt",arr,N)){
        start=clock();
        SelectionSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Average_Case_1000.txt",arr,N)){
        start=clock();
        SelectionSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Worst_Case_1000.txt",arr,N)){
        start=clock();
        SelectionSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
}