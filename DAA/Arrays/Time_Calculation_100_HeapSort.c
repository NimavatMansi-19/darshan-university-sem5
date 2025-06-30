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
    for(int i=0;i<n;i++){
        fscanf(f,"%d",&arr[i]);
    }
    fclose(f);
    return 1;
}
void heapify(int arr[],int n,int i){
    int larg=i;
    int left=2*i+1;
    int right=2*i+2;
    if(left<n && arr[left]>arr[larg]){
        larg=left;
    }
    if(right<n && arr[right]>arr[larg]){
        larg=right;
    }
    if(larg!=i){
        int temp=arr[i];
        arr[i]=arr[larg];
        arr[larg]=temp;
        heapify(arr,n,larg);
    }

}
void HeapSort(int arr[],int n){
    for(int i=n/2-1;i>=0;i--){
        heapify(arr,n,i);
    }
    for(int i=n-1;i>0;i--){
        int temp=arr[0];
        arr[0]=arr[i];
        arr[i]=temp;
        heapify(arr,i,0);
    }
   
    
}
void main(){
    clock_t start,end;
    double time_taken;
    int arr[N];
    if(readFile("Best_Case_100.txt",arr,N)){
        start=clock();
        HeapSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Average_Case_100.txt",arr,N)){
        start=clock();
        HeapSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
    if(readFile("Worst_Case_100.txt",arr,N)){
        start=clock();
        HeapSort(arr,N);
        end=clock();
        time_taken=((double)(end-start))/CLOCKS_PER_SEC*1000;
        printf("Time Take =%f",time_taken);
    }
}