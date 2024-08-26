# 1. 클래스 Video:
#    - 초기화(id, running_times)
#      - 비디오 ID를 id로 설정
#      - 비디오 실행 시간을 running_times로 설정
#      - 좋아요 수, 싫어요 수, 조회수를 0으로 초기화

# 2. 클래스 VideoSharingPlatform:
#    - 초기화()
#      - 인덱스를 0으로 설정
#      - reuse_index를 빈 리스트(우선순위 큐)로 초기화
#      - videos를 빈 딕셔너리로 초기화

#    - 메서드 _get_video(id)
#      - 만약 id가 videos에 있다면, 해당 비디오 객체를 반환

#    - 메서드 upload(video)
#      - 만약 reuse_index가 비어있지 않다면:
#        - reuse_index에서 가장 작은 ID를 꺼내 새로운 비디오 ID로 사용
#      - 그렇지 않으면:
#        - 현재 인덱스를 새로운 비디오 ID로 사용
#        - 인덱스를 1 증가
#      - 새로운 ID와 비디오 실행 시간을 사용해 새로운 Video 객체 생성
#      - 이 비디오 객체를 ID를 키로 하여 videos 딕셔너리에 저장
#      - 새로운 비디오 ID를 반환

#    - 메서드 remove(videoId)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - videos 딕셔너리에서 해당 비디오 제거
#        - videoId를 reuse_index에 추가 (나중에 재사용하기 위해)

#    - 메서드 watch(videoId, startMinute, endMinute)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - 해당 비디오의 조회수를 1 증가
#        - 시작 인덱스를 startMinute과 0 중 큰 값으로 계산
#        - 종료 인덱스를 endMinute + 1과 실행 시간 길이 중 작은 값으로 계산
#        - 실행 시간의 시작부터 종료 인덱스까지의 부분 문자열을 반환 (포함 시작, 제외 종료)
#      - 그렇지 않으면 "-1" 반환

#    - 메서드 like(videoId)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - 해당 비디오의 좋아요 수를 1 증가

#    - 메서드 dislike(videoId)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - 해당 비디오의 싫어요 수를 1 증가

#    - 메서드 getLikesAndDislikes(videoId)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - 좋아요 수와 싫어요 수를 리스트로 반환
#      - 그렇지 않으면 [-1] 반환

#    - 메서드 getViews(videoId)
#      - 만약 videoId를 가진 비디오가 존재한다면:
#        - 해당 비디오의 조회수를 반환
#      - 그렇지 않으면 -1 반환


class Video:
    def __init__(self, id, running_times):
        self.id = id
        self.running_times = running_times
        self.likes = 0
        self.dislikes = 0
        self.views = 0

class VideoSharingPlatform:
    def __init__(self):
        self.index = 0        # 다음 비디오의 ID를 생성하기 위한 인덱스
        self.reuse_index = [] #삭제된 비디오의 ID를 재사용하기 위한 우선순위 큐
        self.videos = {}      # 현재 플랫폼에 있는 비디오들을 저장하는 딕셔너리

    def _get_video(self, id): # 비디오 ID로 비디오 객체를 검색
        if id in self.videos:
            return self.videos[id]
    # 만약 id가 videos에 있다면, 해당 비디오 객체를 반환

    def upload(self, video: str) -> int: # 비디오를 업로드하고 고유 ID를 반환
        id = self.index
        if self.reuse_index:
            id = heapq.heappop(self.reuse_index)
        # 만약 reuse_index가 비어있지 않다면: reuse_index에서 가장 작은 ID를 꺼내 새로운 비디오 ID로 사용
        else:
            self.index += 1
        self.videos[id] = Video(id=id, running_times=video)
        return id

    def remove(self, videoId: int) -> None: # 비디오를 제거하고 해당 ID를 재사용할 수 있도록 설정
        if self._get_video(videoId):
            del self.videos[videoId]
            heapq.heappush(self.reuse_index, videoId)

    def watch(self, videoId: int, startMinute: int, endMinute: int) -> str: # 비디오의 특정 부분을 시청하고, 조회수를 증가
        if v:= self._get_video(videoId):
            v.views += 1
            s = max(startMinute, 0)
            # bc slice list [inclusive:exclusive]
            e = min(endMinute+1, len(v.running_times))
            return v.running_times[s:e]
        return "-1"

    def like(self, videoId: int) -> None: # 비디오에 좋아요를 추가
        if v:= self._get_video(videoId):
            v.likes += 1

    def dislike(self, videoId: int) -> None: # 비디오에 싫어요를 추가
        if v:= self._get_video(videoId):
            v.dislikes += 1

    def getLikesAndDislikes(self, videoId: int) -> List[int]: # 비디오의 좋아요 및 싫어요 수를 반환
        if v:= self._get_video(videoId):
            return [v.likes, v.dislikes]
        return [-1]

    def getViews(self, videoId: int) -> int: # 비디오의 조회수를 반환
        if v:= self._get_video(videoId):
            return v.views
        return -1