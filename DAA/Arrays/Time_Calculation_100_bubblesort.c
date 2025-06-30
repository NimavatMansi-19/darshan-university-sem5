#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define N 100   
int readFile(const char *filename,int arr[],int n){
    FILE *f=fopen(filename,"r");
    if(!f){
        printf("File not available");
        return 0;
    }
    for(int i=0;i<n;i++)
        fscanf(f,"%d",&arr[i]);
    fclose(f);
    return 1;
}
void Bubble_sort(int arr[],int n){
    int swap;
    for(int i=0;i<n-1;i++){
        swap=0;
        for(int j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                int temp=arr[j];
                arr[j+1]=arr[j];
                arr[j]=temp;
                swap=1;
            }
        }
        if(swap==0){
            break;
        }
    }
   
}
void main(){
    clock_t start,end;
    double time_taken;
    int arr[N];
    if(readFile("Best_Case_100.txt",arr,N)){
        start=clock();
        Bubble_sort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Average_Case_100.txt",arr,N)){
        start=clock();
        Bubble_sort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Worst_Case_100.txt",arr,N)){
        start=clock();
        Bubble_sort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
}